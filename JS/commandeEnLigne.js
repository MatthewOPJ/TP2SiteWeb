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


function commander(){
    




}