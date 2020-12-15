var grille;
var grilleRevellee;
var caseVerifieeRecursivite;

var nbCasex = 9;
var nbCasey = 9;


var nbrBomb = 10;

var nbBombeAlentour = 0;


var listEtat = ["images/empty.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/normal.png", "images/bomb.png", "images/flag.png" ]

var pathArray = "file://" + window.location.pathname.slice(0, -10);

var listeNumeros = [pathArray+listEtat[1], pathArray+listEtat[2], pathArray+listEtat[3], pathArray+listEtat[4], pathArray+listEtat[5], pathArray+listEtat[6], pathArray+listEtat[7], pathArray+listEtat[8]];



function createcase(nbCasex, nbCasey) {
    grilleRevellee =[];
    grille = [];
    for (var i = 0; i < nbCasey; i++) {
        grille[i]=[];
        for (var x = 0; x < nbCasex; x++) {
            var imgFont= document.createElement('img');
            imgFont.dataset.src = listEtat[9];
            imgFont.dataset.x = x;
            imgFont.dataset.y = i;
            grille[i][x]= imgFont;
        }
    }
    for (var i = 0; i < nbCasey; i++) {
        grilleRevellee[i]=[];
        for (var x = 0; x < nbCasex; x++) {
            var imgFont2= document.createElement('img');
            imgFont2.dataset.src = listEtat[9];
            imgFont2.dataset.xr = x;
            imgFont2.dataset.yr = i;
            grilleRevellee[i][x]= imgFont2;
        }
    }
    //grilleRevellee = grille;


}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function ajoutBombe() {
    for (var i = 0; i < nbrBomb; i++)
    {
        var x = getRandomInt(nbCasex);
        var y = getRandomInt(nbCasey);
        grille[y][x].src = listEtat[10];
    }
}
function renseigneLeNbrBombe(){
    for (var i = 0; i < nbCasex; i++){
        for (var a = 0; a < nbCasey; a++) {

            if (grille[i][a].src != pathArray+listEtat[10]){
                quelestlenombredebombeAutourCase(a,i);
                grille[i][a].src = listEtat[nbBombeAlentour];
            }
        }
    }
    ////A ENLEVER
    ///grilleRevellee = grille;
}

function quelestlenombredebombeAutourCase(x,y){
    bombeExist = 0;
    nbBombeAlentour = 0;
    if (x != 0 && y != 0){
        if (grille[y-1][x-1].src == pathArray+listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (x != 0){
        if (grille[y][x-1].src == pathArray+listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != nbCasey - 1 && x != 0){
        if (grille[y+1][x-1].src == pathArray+listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != nbCasey - 1){
        if (grille[y+1][x].src == pathArray+listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (x != nbCasex - 1 && y != nbCasey - 1){
        if (grille[y+1][x+1].src == pathArray+listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (x != nbCasex - 1){
        if (grille[y][x+1].src == pathArray+listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != 0 && x != nbCasex - 1){
        if (grille[y-1][x+1].src == pathArray+listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != 0){
        if (grille[y-1][x].src == pathArray+listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
}

function afficherGrille(){
    $('div#grille').text("");
    for (var i = 0; i < nbCasey; i++){
            for (var x = 0; x < nbCasex; x++){
                $('div#grille').append(grilleRevellee[i][x]);
            }
            $('div#grille').append("</br>"); 
    }
}

function playcase(coordX, coordY){
    jouerLaCaseRecursif(coordX, coordY);
    afficherGrille();
}

function jouerLaCaseRecursif(coordX, coordY){

    if (grilleRevellee[coordY][coordX].src == pathArray+listEtat[0]){
        console.log("verif case "+ coordX + " , " + coordY);

        // playcase(coordX, coordY) : on tombe sur une case vide (sans numéro ni bombe)

        if (grille[coordY][coordX].src == pathArray+listEtat[0]){
            if (coordX+1<=nbCasex-1){
                jouerLaCaseRecursif(Number(coordX)+1, Number(coordY));
                if (0<=coordY-1){
                    jouerLaCaseRecursif(Number(coordX)+1, Number(coordY)-1);
                }
                if (coordY+1<=nbCasey-1){
                    jouerLaCaseRecursif(Number(coordX)+1, Number(coordY)+1);
                }
            }
            if (coordY+1<=nbCasey-1){
                jouerLaCaseRecursif(Number(coordX), Number(coordY)+1);

            }
            
            if (0<=coordX-1){
                jouerLaCaseRecursif(Number(coordX)-1, Number(coordY));
                if (0<=coordY-1){
                    jouerLaCaseRecursif(Number(coordX)-1, Number(coordY)-1);
                }
                if (coordY+1<=nbCasey-1){
                    jouerLaCaseRecursif(Number(coordX)-1, Number(coordY)+1);
                }
            }
            if (0<=coordY-1){
                jouerLaCaseRecursif(Number(coordX), Number(coordY)-1);
            }
            grilleRevellee[coordY][coordX].src = pathArray+listEtat[0];

        }
        // playcase(coordX, coordY) : on tombe sur une case avec un chiffre
        if (listeNumeros.includes(grille[coordY][coordX].src)){
            grilleRevellee[coordY][coordX].src = grille[coordY][coordX];
        }
        // playcase(coordX, coordY) : on tombe sur une case avec une bombe = fin de jeu
        if (grille[coordY][coordX].src ==  pathArray+listEtat[10]){
            finDuJeu(false);
        }
    }
}


function finDuJeu(valeurBoolFin){
    //gagné
    if (valeurBoolFin){

    } 
    //perdu
    else {
        for (var i = 0; i < nbCasey; i++) {
        	for (var x = 0; x < nbCasex; x++) {
                if (grille[i][x].src ==  pathArray+listEtat[10]){
                    grilleRevellee[i][x].src = pathArray+listEtat[10];
                }
            }
        }
    }
    afficherGrille();
}


function newStart(){
    $('div#grille').text("");
    createcase(nbCasex, nbCasey);
    ajoutBombe();
    renseigneLeNbrBombe();
    afficherGrille();
    $('img').on('click', function() {
        playcase(this.dataset.xr, this.dataset.yr);});
}

$(document).ready(function() {
    $('#debutpartie').on('click', newStart);
})

