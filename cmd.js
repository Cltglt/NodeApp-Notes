// IMPORT ////////
const yargs = require('yargs');
const fs = require("fs");
const chalk = require("chalk");
const { argv } = require('process');
const error = chalk.inverse.red("Erreur");
// ///////////////

// SCRIPT ///////
yargs.command({
    // Commande Add -> Ajoute une note
    command: 'add',
    describe: 'Ajoute une note',
    builder: {
        title:{
            describe: "Titre",
            type: "string",
            demandOption: true, // Obligatoire
        },
        message:{
            describe: "Commentaire",
            type: "string",
            demandOption: false, // Pas Obligatoire
        }
    },
    handler: (argv) => {
        fs.readFile('data.json', "utf-8", (err,dataStr) => {
            if(err) console.log(error);
            else {
                console.log(chalk.bold.green("File read"));
                const dataObjJS = JSON.parse(dataStr);
                const Obj = {
                    id: dataObjJS.length + 1,
                    title: argv.title,
                    message: argv.message,
                }
                dataObjJS.push(Obj);
                const newDataJSON = JSON.stringify(dataObjJS); 
                fs.writeFile("data.json",newDataJSON,(err) => {
                    if(err) console.log(error);
                    else {
                        console.log(chalk.inverse.green("   Les notes ont été modifié   "));
                    }
                });
            }
        })
    }
}).command({
    command: 'list',
    describe: 'Liste les titres',
    handler: () => {
        console.log("Liste :");
        fs.readFile("data.json", "utf-8",(err,dataStr) => {
            if (err) console.log(error)
            else {
                const dataObjJs = JSON.parse(dataStr);
                for(let i=0;i<dataObjJs.length;i++) {
                    console.log(`${dataObjJs[i].id}. ${dataObjJs[i].title} a pour message ${dataObjJs[i].message}`);
                }
            }
        })
    }
}).command({
    command: 'remove',
    describe: 'Supprime une note',
    builder: {
        title:{
            describe: "title",
            type: "string",
            demandOption: false, // Obligatoire
        },
        message:{
            describe: "id",
            type: "number",
            demandOption: false, // Pas Obligatoire
        }
    },
    handler: (argv) => {
        fs.readFile("data.json", "utf-8",(err,dataStr) => {
            if (err) console.log(error)
            else {
                const dataObjJs = JSON.parse(dataStr);
                console.log(dataObjJs);
                // Conditions suppression par titre ou ID
                if (argv.title) {
                    // Suppression par le titre
                    let newDataRmByTitle =  dataObjJs.filter(item => argv.title !== item.title);
                    console.log(newDataRmByTitle);
                    // On réinjecte dans data.json
                    const newDataRmByTitleJSON = JSON.stringify(newDataRmByTitle); 
                    fs.writeFile("data.json",newDataRmByTitleJSON,(err) => {
                        if(err) console.log(error);
                        else {
                            console.log(chalk.inverse.green("   Les notes ont été modifié   "));
                        }
                    });
                } else if (argv.id) {
                    // Suppression par l'ID
                    let newDataRmById =  dataObjJs.filter(item => argv.id !== item.id);
                    console.log(newDataRmById);
                    // On réinjecte dans data.json
                    const newDataRmByIdJSON = JSON.stringify(newDataRmById); 
                    fs.writeFile("data.json",newDataRmByIdJSON,(err) => {
                        if(err) console.log(error);
                        else {
                            console.log(chalk.inverse.green("   Les notes ont été modifié   "));
                        }
                    });
                }
            }
        })
    }
}).command({
    command: 'read',
    describe: 'Lire une note',
    builder: {
        title:{
            describe: "title",
            type: "string",
            demandOption: false, // Obligatoire
        },
        message:{
            describe: "id",
            type: "number",
            demandOption: false, // Pas Obligatoire
        }
    },
    handler: (argv) => {
        fs.readFile("data.json", "utf-8",(err,dataStr) => {
            if (err) console.log(error)
            else {
                const dataObjJs = JSON.parse(dataStr);
                console.log(dataObjJs);

                if (argv.title) {
                    let newDataRmByTitle =  dataObjJs.filter(item => argv.title == item.title);
                    console.log(`${newDataRmByTitle[0].id}. '${newDataRmByTitle[0].title}' a pour message : ${newDataRmByTitle[0].message}`);
                } else if (argv.id) {
                    console.log(`${dataObjJs[argv.id-1].id}. '${dataObjJs[argv.id-1].title}' a pour message : ${dataObjJs[argv.id-1].message}`);
                }
            }
        })
    }
}).argv;