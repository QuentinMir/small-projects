"use strict";

/**********************
 * ** Variables*
 *  ******************/
let photos = document.querySelectorAll(".photo-list li");

let selectAllButton = document.querySelector("#selectAll");

let deselectAllButton = document.querySelector("#deselectAll");


/**********************
 * ** Fonctions*
 *  ******************/

/*selectionner des items*/
function selectItem() {
    this.classList.toggle("selected");

    compteuritem();
};


/*compteur d'items*/
function compteuritem () {
    // querySelectorAll va retourner un tableau avec les li.selected
    let selected = document.querySelectorAll("li.selected")
    // On remplace le contenu de "#total em" par la longueur du tableau mentionné plus haut.
    document.querySelector("#total em").textContent = selected.length;
}

/*selectionner TOUS les items*/
function selectAll() {
    
    for (let j=0; j < photos.length; j++) {
    photos[j].classList.add("selected");
    }

    compteuritem();
}

/*Deselectionner TOUS les items*/
function deselectAll() {
    
    for (let j=0; j < photos.length; j++) {
    photos[j].classList.remove("selected");
    }

    compteuritem();
}


/**********************
 * ** Main*
 *  ******************/
for (let i=0; i < photos.length; i++) {
    photos[i].addEventListener("click", selectItem)
};

selectAllButton.addEventListener("click", selectAll);

deselectAllButton.addEventListener("click", deselectAll);
