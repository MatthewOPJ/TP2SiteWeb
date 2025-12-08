function changeImage(){
    // Get the select elements and the image element
    var saveurDeBaseChoisie = document.getElementById("saveurDeBaseChoisie");
    var saveurDeGlacageChoisie = document.getElementById("saveurDeGlacageChoisie");
    var image = document.getElementById("imgBase");

    // Get the selected values
    var valeurSaveur = saveurDeBaseChoisie.value;
    var valeurGlacage = saveurDeGlacageChoisie.value;

    // Construct the new image filename/path
    // This assumes your images are named consistently, e.g., "images/red_square.png"
    console.log(valeurGlacage);
    var newImageSrc;

    if(valeurSaveur == "Vide"){
        newImageSrc = "";
    } else {
        if(valeurGlacage == "Vide"){
            newImageSrc = "../images/base_" + valeurSaveur + ".png";
        } else {
            newImageSrc = "../images/base_" + valeurSaveur + "_glacage_" + valeurGlacage + ".png";
        }
    }

    image.src = newImageSrc;
}

function changeCerise(){
    var image = document.getElementById("imgCerise");

    if(document.getElementById("cerise").checked){
        image.src = "../images/cerise.png";
    } else {
        image.src = "";
    }
}

function changeCremeFouettee(){
    var image = document.getElementById("imgCremeFouettee");

    if(document.getElementById("cremeFouettee").checked){
        image.src = "../images/creme_fouettee.png";
    } else {
        image.src = "";
    }
}

function annuler(){
    document.getElementById("saveurDeBaseChoisie").value = "Vide";
    document.getElementById("saveurDeGlacageChoisie").value = "Vide";

    changeImage();

    document.getElementById("cerise").checked = false;

    changeCerise();

    document.getElementById("cremeFouettee").checked = false;

    changeCremeFouettee();

    document.getElementById("nomPrenom").value = "";
    document.getElementById("adresse").value = "";
}



async function commander(){
    const commande = {
        id: 0,
        base: document.getElementById("saveurDeBaseChoisie").value,
        glacage: document.getElementById("saveurDeGlacageChoisie").value,
        cerise: document.getElementById("cerise").checked,
        cremeFouettee: document.getElementById("cremeFouettee").checked,
        date: Date.now(),
        nom: document.getElementById("nomPrenom").value,
        adresse: document.getElementById("adresse").value
    };

    console.log(commande);

    const reponse = await fetch("http://localhost:3000/commande", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commande)
    });

    const resultat = await reponse.json();

    alert(resultat.message);
}



async function supprimerCommande(id){
    const reponse = await fetch("http://localhost:3000/commande/:id", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: document.getElementById(`commande-${id}`)
    });

    const resultat = await reponse.json();

    alert(resultat.message);
}


async function creerBSCommandes(){
    const reponse = await fetch("http://localhost:3000/commandes", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    const resultat = await reponse.json();
    let data = resultat.data;
    
    creerCartesBS(data);
}

function creerCartesBS(commandes){
    let cards = document.getElementById("cards");
    let row;
    let card;

    for(let i = 0; i < commandes.length; i++)
    {
        if(i % 3 == 0)
        {
            row = document.createElement("div");
            row.className = "row";
            cards.appendChild(row);
        }

        let col = document.createElement("div");
        col.className = "col-4"

        let titre = document.createElement("h1");
        titre.className = "card-title";
        titre.textContent = `commande ${commandes[i].id}`;

        let text = document.createElement("pre");
        text.className = "card-text";
        
        text.textContent = `
            id: ${commandes[i].id}\n
            base: ${commandes[i].base}\n
            glacage: ${commandes[i].glacage}\n
            crème fouettée: ${commandes[i].cremeFouettee}\n
            cerise: ${commandes[i].cerise}\n
            date de commande: ${commandes[i].date}\n
            nom du client: ${commandes[i].nom}\n
            adresse du client: ${commandes[i].adresse}\n
        `;

        card = document.createElement("div");
        card.className = "card w-100 commande";
        card.id = `commande-${commandes[i].id}`;

        row.appendChild(col);
        card.appendChild(titre);
        card.appendChild(text);
        col.appendChild(card);
    }
}
