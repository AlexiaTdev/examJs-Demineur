var grille;
var caseJeu = 5;
var nbrCase = 9;

function createcase() {
    grille = new Array(9);
    for (var i = 0; i < 9; i++)
        {
        	grille[i]= new Array(9);
        	for (var x = 0; x < 9; x++) {
            	grille[i][x]= caseJeu;
        	}
        }
    //$('div#grille').text(grille);
    afficherGrille(grille, nbrCase);
}

function afficherGrille(grille, nbrCase){
    //$('div#grille').text(grille);
    for (var i = 0; i < nbrCase; i++){
        $('div#grille').append(grille[i] + '</br>');
    }
}

$(document).ready(function() {
    console.log('ok');
    createcase();
})