"use strict";

function displayFirstname() {
  displayArticle();

  let firstName = document.querySelector("#firstname").value;

  fetch(`https://api.agify.io/?name=${firstName}`)
    .then((response) => response.json())
    .then((datas) => injectText(datas))
    .catch((error) => alert("Erreur : " + error));
}

function displayArticle() {
  document.querySelector("article").classList.remove("hide");
}

function injectText(datas) {
  document.querySelector(
    "article h2"
  ).textContent = `D'après Agify, avec le prénom ${datas.name}, tu as ${datas.age} ans`;
  document.querySelector("article p strong").textContent = datas.count;
}

document.querySelector("#submit").addEventListener("click", displayFirstname);
