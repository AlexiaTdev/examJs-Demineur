var grille;

var nbCasex = 9;
var nbCasey = 9;


var nbrBomb = 10;

var nbBombeAlentour = 0;


var listEtat = ["images/empty.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/normal.png", "images/bomb.png", "images/flag.png" ]

var pathArray = "file://" + window.location.pathname.slice(0, -10);

function createcase(nbCasex, nbCasey) {
    grille = [];
    for (var i = 0; i < nbCasey; i++)
        {
        	grille[i]=[];
        	for (var x = 0; x < nbCasex; x++) {
                var imgFont= document.createElement('img');
                imgFont.dataset.src = listEtat[9];
                imgFont.dataset.x = x;
                imgFont.dataset.y = i;
                grille[i][x]= imgFont;
        	}
        }
}

function afficherGrille(){
    $('div#grille').text("");
    for (var i = 0; i < nbCasey; i++){
            for (var x = 0; x < nbCasex; x++){
                $('div#grille').append(grille[i][x]);
            }
            $('div#grille').append("</br>"); 
    }
}

function playcase(coordX, coordY){
    afficherGrille();
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


function newStart(){
    $('div#grille').text("");
    createcase( nbCasex, nbCasey);
    ajoutBombe();
    renseigneLeNbrBombe();
    afficherGrille();
    $('img').on('click', function() {playcase(this.dataset.x, this.dataset.y);});
}

$(document).ready(function() {
    $('#debutpartie').on('click', newStart);
})

