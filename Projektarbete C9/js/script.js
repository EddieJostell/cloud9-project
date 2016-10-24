/*formulär*/

function validateForm() {
    var validerad = true;
    document.getElementById("namnfel").innerHTML = "";
    document.getElementById("epostfel").innerHTML = "";
    document.getElementById("arendefel").innerHTML = "";
    document.getElementById("meddelandefel").innerHTML = "";

    var namn = document.forms["kontaktform"]["namn"].value;

    if (namn == "" || namn == null) {
        document.getElementById("namnfel").innerHTML = "You got to type in a name!";
        validerad = false;
    }
    var epost = document.forms["kontaktform"]["epost"].value;

    if (epost == "" || epost == null) {
        document.getElementById("epostfel").innerHTML = "You got to submit your e-mail!";
        validerad = false;
    }
    var arende = document.forms["kontaktform"]["arende"].value;

    if (arende == "" || arende == null) {
        document.getElementById("arendefel").innerHTML = "You got to specify a subject!";
        validerad = false;
    }
    var meddelande = document.forms["kontaktform"]["meddelande"].value;

    if (meddelande == "" || meddelande == null) {
        document.getElementById("meddelandefel").innerHTML = "You got to submit a message!";
        validerad = false;
    }
    return validerad;

   /* if (!validerad)
        return false;*/


}


//Tema ändring//

function changethemeonPage() {
    
    var invertStyle = document.getElementById("mycoolstyle").getAttribute("href")

    if (invertStyle == "css/style.css")
        invertStyle = "css/style2.css";
    else
        invertStyle = "css/style.css";

    document.getElementById("mycoolstyle").setAttribute("href", invertStyle);
}

/* IMAGE SLIDER*/
//Variables
var altNumb = 0
var imageNumb = 0
var img = [
    "img/c9lan.jpg",
    "img/cloud9LAN.jpg",
    "img/cloud9team.jpg",
    "img/cloud9logo.jpg",
    "img/team.jpg"
];

var alt = [
    "Cloud9 Cologne match picture",
    "Cloud9 @ LAN",
    "Cloud9 teampicture",
    "Cloud9 Logo",
    "Cloud9 teampicture"
];
setInterval(goRight, 2000);

//Functions
function goLeft() {
    imageNumb--;
    altNumb--;
    if (imageNumb < 0) {
        imageNumb = 4;
        altNumb = 4;
        
    }
    document.getElementById("bild").setAttribute("src", img[imageNumb]);
    document.getElementById("bild").setAttribute("alt", alt[altNumb]);

}
function goRight() {
    imageNumb++;
    altNumb++;
    if (imageNumb > img.length - 1){
        imageNumb = 0;
        altNumb = 0;        
    }
    document.getElementById("bild").setAttribute("src", img[imageNumb]);
    document.getElementById("bild").setAttribute("alt", alt[altNumb]);
}
