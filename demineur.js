var grille;
var caseJeu = 5;
var nbrCase = 9;
//var imgFont= document.createElement('img', {src : "images/normal.png"});

    //imgFont.setAttributeNS("img", "src", "images/normal.png");
    //imgFont.;
    //imgFont = 
    

function createcase(nbrCase) {
    grille = new Array(nbrCase);
    for (var i = 0; i < nbrCase; i++)
        {
        	grille[i]= new Array(nbrCase);
        	for (var x = 0; x < nbrCase; x++) {
                var imgFont= document.createElement('img');
                imgFont.src = "images/normal.png";
            	grille[i][x]= imgFont;
        	}
        }
    afficherGrille(grille, nbrCase);
}

function afficherGrille(grille, nbrCase){
    for (var i = 0; i < nbrCase; i++){
            for (var x = 0; x < nbrCase; x++){
                $('div#grille').append(grille[i][x]);
            }
            $('div#grille').append("</br>"); 
    }
}

$(document).ready(function() {
    createcase(nbrCase);
})