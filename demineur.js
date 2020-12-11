var grille;
var casex = 9;
var casey = 9;
var caseJeu = 0;
var bombe = "b";
var nbBombe = 10;
var nbrCase = 9;
//var imgFont = document.createElement("img");
//imgFont.src = "Image/empty.png";

function createcase() {
    grille = new Array(casex);
    for (var i = 0; i < casex; i++)
        {
        	grille[i]= new Array(casey);
        	for (var a = 0; a < casey; a++) {
            	grille[i][a]= caseJeu;
        	}
        }
    //$('div#grille').text(grille);
}

function ajoutBombe() {
    for (var i = 0; i < nbBombe; i++)
    {
        var x = getRandomInt(casex);
        var y = getRandomInt(casey);
        grille[x][y] = bombe;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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
    ajoutBombe();
    afficherGrille(grille, nbrCase);
})