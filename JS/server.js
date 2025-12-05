const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.listen(3000, () => console.log(`serveur lancé sur le port ${3000}`));



function chargerData(){

}

function ajouterCommande(){

}

function sauvegarderData(){

}