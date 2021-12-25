"use strict";

let random = Math.floor(Math.random() * 101);

let nb;
let message = "";
let tries = 0;

function play() {
  do {
    // demander le chiffre au joueur
    do {
      nb = parseInt(prompt("Entrez un nombre entre 0 et 100"));

      if (isNaN(nb) || nb < 0 || nb > 100) {
        window.alert("Entrez un NOMBRE entre 0 et 100");
      }
    } while (isNaN(nb) || nb < 0 || nb > 100);

    // compteur d'essais
    tries += 1;

    if (nb === random) {
      window.alert("Gagné !!!");

      // si l'utilisateur ne saisit pas un nombre, ou si le nombre n'est pas compris entre 0 et 100
    } else if (nb > random) {
      window.alert("C'est moins");
    } else {
      window.alert("c'est plus");
    }
  } while (nb !== random);

  document.querySelector(
    "#result"
  ).innerHTML += `<h3>Bien joué, c'était bien ${random}. Il t'aura fallu ${tries} essais.</h3> `;
  // rafraichir le nombre pour rejouer
  random = Math.floor(Math.random() * 101);
  //rafraichir le compteur
  tries = 0;
}

document.querySelector("#play").addEventListener("click", play);
