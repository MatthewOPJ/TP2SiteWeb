const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.post("/commande", (req, res) => {
    res.json({
        message: "Commande faite!"
    });

    console.log("commande effectuée: " + JSON.stringify(req.body));
});


app.listen(3000, () => console.log(`serveur lancé sur le port ${3000}`));


