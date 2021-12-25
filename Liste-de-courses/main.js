"use strict";

/*************************************
 * ** VARIABLES    ------------------
 *  *********************************/
let list;

/*************************************
 * ** FONCTIONS    -----------------
 *  *********************************/

function addItem() {
  let text = document.querySelector("#toAdd");
  let item = text.value.toLowerCase();
  pushItem(item);
  displayItem();

  // refresh la saisie
  text.value = "";
}

function pushItem(item) {
  list.push(item);
}

function displayItem() {
  let ul = document.querySelector("ul.list");

  ul.innerHTML = "";

  list.forEach((element) => (ul.innerHTML += `<li>${element}</li>`));

  document.querySelector(
    "section h2"
  ).textContent = `Liste de course : ${list.length}`;
}

function removeAll() {
  list = [];
  displayItem();
}

function displayPopup() {
  document.querySelector("#popup").classList.remove("hide");
}

function hidePopup() {
  document.querySelector("#popup").classList.add("hide");
}

function removeOne() {
  let item = document.querySelector("#toDelete").value;

  let i = list.indexOf(item);

  if (i === -1) {
    alert("ERROR : L'item '" + item + "' ne fait pas parti de la liste");
  } else {
    list.splice(i, 1);
    displayItem();
  }
}

/*************************************
 * ** MAIN    ----------------------
 *  *********************************/

document.addEventListener("DOMContentLoaded", function () {
  list = [];

  displayItem();

  document.querySelector("#submit").addEventListener("click", addItem);

  document.querySelector("#delete").addEventListener("click", removeAll);

  document.querySelector("#deleteOne").addEventListener("click", displayPopup);

  document
    .querySelector("[title=annuler]")
    .addEventListener("click", hidePopup);

  document.querySelector("#btnDelete").addEventListener("click", removeOne);
});

// Manque à faire enlever produits un par un
