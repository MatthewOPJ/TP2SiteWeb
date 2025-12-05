function changeImage() {
    // Get the select elements and the image element
    var saveur = document.getElementById("saveur");
    var glacage = document.getElementById("glacage");
    var image = document.getElementById("changeImage");

    // Get the selected values
    var valeurSaveur = saveur.value;
    var valeurGlacage = glacage.value;

    // Construct the new image filename/path
    // This assumes your images are named consistently, e.g., "images/red_square.png"
    var newImageSrc = "../images/base_" + valeurSaveur + ".png";
    var imgGlacage = "../images/base_" + valeurSaveur + "_glacage_" + valeurGlacage + ".png";

    image.src = newImageSrc;
}