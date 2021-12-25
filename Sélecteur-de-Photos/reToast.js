"use strict";

/**********************
 * ** Variables*
 *  ******************/

let photos = document.querySelectorAll(".photo-list li");

/**********************
 * ** Fonctions*
 *  ******************/

function selectPhoto () {
    this.classList.toggle("selected");
    countSelected();
}

function countSelected () {
   let nb = document.querySelectorAll(".photo-list li.selected").length;
   
   document.querySelector("#total em").textContent= nb

}

function selectAll () {
    for (let i=0; i<photos.length; i++)
    {photos[i].classList.add("selected");
    countSelected();
}
}

function unselectAll () {
    for (let i=0; i<photos.length; i++)
    {photos[i].classList.remove("selected");
    countSelected();
}
}

/**********************
 * ** Main*
 *  ******************/



for (let i=0; i<photos.length;i++) {
    photos[i].addEventListener("click", selectPhoto);
}

document.querySelector("#selectAll").addEventListener("click", selectAll);

document.querySelector("#deselectAll").addEventListener("click", unselectAll);

