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
    var newImageSrc = "../images/base_" + valeurSaveur + ".png";
    var imgGlacage = "../images/base_" + valeurSaveur + "_glacage_" + valeurGlacage + ".png";

    // check if file exists and dont change if it doesnt

    image.src = imgGlacage;
}

function changeCerise(){
    var image = document.getElementById("imgCerise");
    console.log(document.getElementById("cerise").checked)

    if(document.getElementById("cerise").checked){
        image.src = "../images/cerise.png";
    } else {
        image.src = "";
    }
}

function changeCremeFouettee(){
    var image = document.getElementById("imgCremeFouettee");
    console.log(document.getElementById("cremeFouettee").checked)

    if(document.getElementById("cremeFouettee").checked){
        image.src = "../images/creme_fouettee.png";
    } else {
        image.src = "";
    }
}