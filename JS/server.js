const express = require("express");
const fs = require("fs");
const cors = require("cors");



const app = express();
app.use(express.json());
app.use(cors());

let donnees = JSON.parse(fs.readFileSync("data/donnes.json", "utf8"));

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.get("/commandes", (req, res) => {
    res.json({
        data: donnees
    });
})

app.delete("/commandes/:id", (req, res) => {
    for(let i = 0; i < donnees.length; i++){
        if(donnees[i].id == req.body.id){
            donnees.splice(i, 1);
            res.json({
                message: "Commande supprimée!"
            });
            return;
        }
    }
    res.json({
        message: "Commande introuvable..."
    })
    // not found
})

app.post("/commande", (req, res) => {
    res.json({
        message: "Commande effectuée!"
    });
    
    if(donnees.length != 0)
    {
        req.body.id = donnees[donnees.length - 1].id + 1;
    }

    req.body.date = new Date(req.body.date);
    req.body.date.toLocaleTimeString();

    donnees.push(req.body);

    fs.writeFileSync("data/donnes.json", JSON.stringify(donnees), "utf8");
});


app.listen(3000, () => console.log(`serveur lancé sur le port ${3000}`));
