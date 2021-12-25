"use strict";

/**********************
 * ** Variables*
 *  ******************/
let sliderStatus = {
  index: 0,
  diapoIsOn: false,
};

let slides = [
  {
    src: "1.jpg",
    caption: "Les gentils pandas",
  },
  {
    src: "2.jpg",
    caption: "P'tit stretching au coucher de soleil",
  },
  {
    src: "3.jpg",
    caption: "Le gentil paysage",
  },
  {
    src: "4.jpg",
    caption: "La gentille voie lactée",
  },
  {
    src: "5.jpg",
    caption: "Le gentil gateau",
  },
  {
    src: "6.jpg",
    caption: "Le gentil gateau mais avec des fraises",
  },
];

let intervalID;

/**********************
 * ** Fonctions*
 *  ******************/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function toolbarToggle() {
  document.querySelector(".toolbar ul").classList.toggle("hide");
  let icon = document.querySelector("#toolbar-toggle i");
  icon.classList.toggle("fa-arrow-right");
  icon.classList.toggle("fa-arrow-down");
}

function refreshSlider() {
  document.querySelector(".slider img").src = `images/${
    slides[sliderStatus.index].src
  }`;
  document.querySelector("#slider figcaption").textContent = `${
    slides[sliderStatus.index].caption
  }`;
}

function nextPhoto() {
  sliderStatus.index++;
  if (sliderStatus.index > slides.length - 1) {
    sliderStatus.index = 0;
  }
  refreshSlider();
}

function prevPhoto() {
  sliderStatus.index--;
  if (sliderStatus.index < 0) {
    sliderStatus.index = slides.length - 1;
  }
  refreshSlider();
}

function randPhoto() {
  let newIndex = getRandomInt(0, slides.length - 1);

  do {
    newIndex = getRandomInt(0, slides.length - 1);
  } while (sliderStatus.index == newIndex);

  sliderStatus.index = newIndex;

  refreshSlider();
}

function diapoPhoto() {
  if (sliderStatus.diapoIsOn == false) {
    intervalID = setInterval(nextPhoto, 2000);
    sliderStatus.diapoIsOn = true;
    document.querySelector("#slider-toggle i").classList.toggle("fa-play");
    document.querySelector("#slider-toggle i").classList.toggle("fa-pause");
  } else {
    clearInterval(intervalID);
    sliderStatus.diapoIsOn = false;
    document.querySelector("#slider-toggle i").classList.toggle("fa-play");
    document.querySelector("#slider-toggle i").classList.toggle("fa-pause");
  }

  refreshSlider();
}

/**********************
 * ** Main*
 *  ******************/

document
  .querySelector("#toolbar-toggle")
  .addEventListener("click", toolbarToggle);

refreshSlider();

document.querySelector("#slider-next").addEventListener("click", nextPhoto);

document.querySelector("#slider-previous").addEventListener("click", prevPhoto);

document.querySelector("#slider-random").addEventListener("click", randPhoto);

document.querySelector("#slider-toggle").addEventListener("click", diapoPhoto);
