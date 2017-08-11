/**
 * Koodin alkuperainen lahde: https://stackoverflow.com/a/16024472
 */
function muokattuPaivays() {
    var paivays = new Date(document.lastModified);
    var esitysmuoto = paivays.getDate() + "." + (paivays.getMonth() + 1) + "." + paivays.getFullYear();
    return esitysmuoto
}

function muokattuKlo() {
    var paivays = new Date();
    var sekunnit
    var minuutit

    if (paivays.getSeconds() < 10) {
        sekunnit = "0" + paivays.getSeconds();
    } else {
        sekunnit = paivays.getSeconds();
    }

    var paivays = new Date();
    var aikaNyt = paivays.getHours() + ":" + paivays.getMinutes() + ":" + sekunnit;
    return aikaNyt
}

var txt1 = "Sivu on viimeksi ladattu ";
var txt2 = " klo ";

document.write(txt1.fontcolor("chartreuse"));
document.write(muokattuPaivays().fontcolor("chartreuse") + txt2.fontcolor("chartreuse") + muokattuKlo().fontcolor("chartreuse"));
document.write(".".fontcolor("chartreuse"));