# Application de Notes en Node.js

## Consignes :

1 : 
Créer un nouveau projet qu'on va appeler notes-app-node
Dedans, vous allez créer un fichier à la main dans votre dossier cmd.js et y coller le contenu ci-dessous
PUIS! VOus allez demander pour la commande add un titre et un message en paramètres.
Avec ce titre et ce message, vous allez créer un objet à afficher dans la console 
Ex: node cmd.js add --title="ma note" --message="lorem ipsum dolor sit amet"
Dans la console
{
   title: "ma note",
   message: "lorem ipsum dolor sit amet"
}

2 : 
Dans la commande add de votre appli de notes,
faire en sorte d'y envoyer un tableau avec votre objet note et l'inscrire dans un fichier data.json
ex: node cmd.js add --title="ma note" --message="lorem ipsum dolor sit amet"
Dans fichier data.json
[
   { title: "ma note", message: "lorem ipsum dolor sit amet"}
]

3 :
Dans la commande list de votre appli de notes,
Pour chaque note dans mon tableau de notes, afficher le titre et le message.
Ex: si dans data.json
[
   {"title": "ma note", "message": "lorem ipsum..."},
   {"title": "ma note numéro2", "message": "blablabla"}
]
Dans la console, ça affiche:
ma note a pour message lorem ipsum...
ma note numéro2 a pour message blablabla

4 :
Modifier la  commande add pour que celle-ci soit cette fois effective et que donc, elle ajoute bien une note.
16 h 13
Indice -> Récupérer le tableau dans le fichier notes.json, et utiliser une méthode qui permet d'ajouter un élément dans le tableau....
16 h 14
Découpez votre réflexion en plusieurs étapes
16 h 16
Objectif :
Si au départ ça dans le fichier json ([
    {"id":1, "title":"Nouvelle note","message":"lorem ipsum dolor"},
    {"id":2, "title":"Une autre note","message":"Blabla"}
])
node cmd.js add --title="truc" --message="un truc à faire"
donnera:
[
    {"id":1, "title":"Nouvelle note","message":"lorem ipsum dolor"},
    {"id":2, "title":"Une autre note","message":"Blabla"},
    {"id":3, "title":"truc","message":"Un truc à faire"},
]