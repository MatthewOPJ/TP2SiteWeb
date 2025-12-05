function changeImage() {
    // Get the select elements and the image element
    var saveurDeBaseChoisie = document.getElementById("saveurDeBaseChoisie");
    var saveurDeGlacageChoisie = document.getElementById("glacage");
    var image = document.getElementById("changeImage");

    // Get the selected values
    var valeurSaveur = saveurDeBaseChoisie.value;
    //var valeurGlacage = saveurDeGlacageChoisie.value;

    // Construct the new image filename/path
    // This assumes your images are named consistently, e.g., "images/red_square.png"
    var newImageSrc = "../images/base_" + valeurSaveur + ".png";
    //var imgGlacage = "../images/base_" + valeurSaveur + "_glacage_" + valeurGlacage + ".png";

    image.src = newImageSrc;
}