var grille;
var nbCasex = 9;
var nbCasey = 9;
//var casex = 3;
//var casey = 3;
var caseJeu = 0;
var bombe = "b";
var nbBombe = 10;
var nbBombeAlentour = 0;
var nbrCase = 9;
var bombeExist = 0;
//var imgFont = document.createElement("img");
//imgFont.src = "Image/empty.png";

function createcase() {
    grille = new Array(nbCasex);
    for (var i = 0; i < nbCasex; i++)
        {
        	grille[i]= new Array(nbCasey);
        	for (var a = 0; a < nbCasey; a++) {
            	grille[i][a]= caseJeu;
        	}
        }
    //$('div#grille').text(grille);
}

function ajoutBombe() {
    for (var i = 0; i < nbBombe; i++)
    {
        var x = getRandomInt(nbCasex);
        var y = getRandomInt(nbCasey);
        grille[y][x] = bombe;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function nombreBombe(){
    for (var i = 0; i < nbCasex; i++){
        for (var a = 0; a < nbCasey; a++) {
            if (grille[i][a] != bombe){
                verifBombe(a,i);
                grille[i][a] = nbBombeAlentour;
            }
        }
    }
}

function verifBombe(x,y){
    bombeExist = 0;
    nbBombeAlentour = 0;
    if (x != 0 && y != 0){
        if (grille[y-1][x-1] == bombe){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (x != 0){
        if (grille[y][x-1] == bombe){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != nbCasey - 1 && x != 0){
        if (grille[y+1][x-1] == bombe){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != nbCasey - 1){
        if (grille[y+1][x] == bombe){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (x != nbCasex - 1 && y != nbCasey - 1){
        if (grille[y+1][x+1] == bombe){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (x != nbCasex - 1){
        if (grille[y][x+1] == bombe){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != 0 && x != nbCasex - 1){
        if (grille[y-1][x+1] == bombe){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != 0){
        if (grille[y-1][x] == bombe){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
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
    nombreBombe();
    afficherGrille(grille, nbrCase);
})