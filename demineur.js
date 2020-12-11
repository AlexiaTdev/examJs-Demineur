
var grille;
var caseJeu = 5;
//var imgFont = document.createElement("img");
var imgFont = "Image/empty.png";

function createcase() {
    grille = new Array(9);
    for (var i = 0; i < 9; i++)
        {
        	grille[i]= new Array(9);
        	for (var x = 0; x < 9; x++) {
            	grille[i][x]= imgFont;
        	}
    	}
    $('div#grille').text (grille);
}



$(document).ready(function() {
    createcase();
})
