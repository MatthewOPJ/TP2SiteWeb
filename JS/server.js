const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let donnees = JSON.parse(fs.readFileSync("donnes.json", "utf8"));

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.post("/commande", (req, res) => {
    res.json({
        message: "Commande faite!"
    });
    req.body.id;
    donnees.push(req.body);
});


app.listen(3000, () => console.log(`serveur lancé sur le port ${3000}`));


