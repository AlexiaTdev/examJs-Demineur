var boolfinDuJeu = false;
var grille;
var grilleRevellee;
//var caseVerifieeRecursivite;

var nbCasex;
var nbCasey;
var nbrBomb;

var nbBombeAlentour = 0;


var listEtat = ["images/empty.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/normal.png", "images/bomb.png", "images/flag.png" ]
var listeNbrCases = [9, 16, 22, 30];
var listeNbrBombes = [10, 40, 100, 250];
var pathArray = "file://" + window.location.pathname.slice(0, -10);

//var listeNumeros = [listEtat[1], listEtat[2], listEtat[3], listEtat[4], listEtat[5], listEtat[6], listEtat[7], listEtat[8]];

function createcase(nbCasex, nbCasey) {
    grilleRevellee =[];
    grille = [];
    for (var i = 0; i < nbCasey; i++) {
        grille[i]=[];
        for (var x = 0; x < nbCasex; x++) {
            grille[i][x]= listEtat[9];
        }
    }
    for (var i = 0; i < nbCasey; i++) {
        grilleRevellee[i]=[];
        for (var x = 0; x < nbCasex; x++) {
            var imgFont= document.createElement('img');
            ///ATTENTION NE FONCTIONNE PAS AVEC DATASET SRC
            //imgFont.dataset.src = listEtat[9];
            imgFont.dataset.xr = x;
            imgFont.dataset.yr = i;
            grilleRevellee[i][x]= imgFont;
            grilleRevellee[i][x].src = pathArray+listEtat[9];
        }
    }


}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function ajoutBombe() {
    for (var i = 0; i < nbrBomb; i++)
    {
        var x = getRandomInt(nbCasex);
        var y = getRandomInt(nbCasey);
        grille[y][x] = listEtat[10];
    }
}
function renseigneLeNbrBombe(){
    for (var i = 0; i < nbCasex; i++){
        for (var a = 0; a < nbCasey; a++) {

            if (grille[i][a] != listEtat[10]){
                quelestlenombredebombeAutourCase(a,i);
                grille[i][a] = listEtat[nbBombeAlentour];
            }
        }
    }
}

function quelestlenombredebombeAutourCase(x,y){
    bombeExist = 0;
    nbBombeAlentour = 0;
    if (x != 0 && y != 0){
        if (grille[y-1][x-1] == listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (x != 0){
        if (grille[y][x-1] == listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != nbCasey - 1 && x != 0){
        if (grille[y+1][x-1] == listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != nbCasey - 1){
        if (grille[y+1][x] == listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (x != nbCasex - 1 && y != nbCasey - 1){
        if (grille[y+1][x+1] == listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (x != nbCasex - 1){
        if (grille[y][x+1] == listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != 0 && x != nbCasex - 1){
        if (grille[y-1][x+1] == listEtat[10]){
            nbBombeAlentour = nbBombeAlentour + 1;
            bombeExist = 1;
        }
    }
    if (y != 0){
        if (grille[y-1][x] == listEtat[10]){
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
    //si la case n'est pas jouée
    if (grilleRevellee[coordY][coordX].src == pathArray+listEtat[9]){
        console.log("verif case "+ coordX + " , " + coordY);

        // si on tombe sur une case vide (sans numéro ni bombe)
        if (grille[coordY][coordX] == listEtat[0]){
            grilleRevellee[coordY][coordX].src = pathArray+listEtat[0];
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
        }
        // si on tombe sur une case avec un chiffre
        if (listEtat.includes(grille[coordY][coordX])){
            grilleRevellee[coordY][coordX].src = pathArray + grille[coordY][coordX];
        }
        // si on tombe sur une case avec une bombe = fin de jeu
        if (grille[coordY][coordX] == listEtat[10]){
            finDuJeu(false);
        }
    }
}


function finDuJeu(valeurBoolFin){
    boolfinDuJeu = true;
    //gagné
    if (valeurBoolFin){
        $('div#resultat').text("vous avez gagne");
    }
    //perdu
    else {
        for (var i = 0; i < nbCasey; i++) {
        	for (var x = 0; x < nbCasex; x++) {
                if (grille[i][x] ==  listEtat[10]){
                    grilleRevellee[i][x].src = pathArray+listEtat[10];
                }
            }
        }
        $('div#resultat').text("vous avez perdu");
    }
    afficherGrille();
}

function playflag(x, y) {
    grilleRevellee[y][x].src = pathArray+listEtat[11];
    afficherGrille()
}

function initialiserJeu() {
    boolfinDuJeu = false;
    $('div#grille').text("");
    $('div#resultat').text("");

    nbCasex = listeNbrCases[document.getElementById('typeGrille').value];
    nbCasey = nbCasex;

    nbrBomb = listeNbrBombes[document.getElementById('typeGrille').value];
}


function newStart(){
    initialiserJeu();
    

    createcase(nbCasex, nbCasey);
    ajoutBombe();
    renseigneLeNbrBombe();
    afficherGrille();
    console.log(document.getElementById('typeGrille').value)
}

$(document).ready(function() {
    $('#debutpartie').on('click', newStart);
})

$(document).on('click', function() {
    if (!boolfinDuJeu){
        $('img').on('click', function() {playcase(this.dataset.xr, this.dataset.yr);});
    }
    noContext = document.getElementById('grille');
            noContext.addEventListener('contextmenu', e => {
                e.preventDefault();
            });
})
$(document).on('contextmenu', function() {
    if (!boolfinDuJeu){
        $('img').on('contextmenu', function() {
            playflag(this.dataset.xr, this.dataset.yr)
        });
    }
})


