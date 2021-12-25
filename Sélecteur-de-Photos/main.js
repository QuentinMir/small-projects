"use strict";

/* les variables */

let photo = document.querySelectorAll(".photo-list li");
;
let deselectAll = document.querySelector("#deselectAll");
let selectedPhoto = document.querySelectorAll(".photo-list li.selected");
let total = document.querySelector("#total em");


/* les fonctions */

function onClickItem() {
    this.classList.toggle("selected")
    
    let selected = document.querySelectorAll("li.selected")
    // querySelectorAll va retourner un tableau avec les li.selected
    document.querySelector("#total em").textContent = selected.length;
    // On remplace le contenu de "#total em" par la longueur du tableau mentionné plus haut.
}

function selectAll() {
    selectAllVar.classList.add("selected")
}


/* le main code*/



// document.querySelector(".photo-list li").addEventListener;
for (let i=0; i < photo.length; i++) {
    photo[i].addEventListener("click", onClickItem);
}

// for (let i=0; i < photo.length; i++) {
//     photo[i].addEventListener("click", selectAll);
// }
