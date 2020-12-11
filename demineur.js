
var grille;
var caseJeu = 5;

function createcase() {
    grille = new Array(9);
    for (var i = 0; i < 9; i++)
        {
        for (var x = 0; x < 9; x++) {
            grille[i][x]= caseJeu;
        }
    }
    $('div#grille').text(grille);
}



$(document).ready(function() {
    createcase();
})
