"use strict";

let game = {
  round: 0,
};

let gameContent = document.querySelector("#game");

/*
do 
{ game.difficulty = parseInt( prompt("Niveau de difficulté ? \n 1.Facile - 2.Normal - 3.Difficile"));} 
while (game.difficulty < 1 || game.difficulty > 3 || isNaN(game.difficulty))*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function requestInt(message, min, max) {
  let nb;
  do {
    nb = parseInt(prompt(message));
  } while (nb < min || nb > max || isNaN(nb));
  return nb;
}

function pv() {
  gameContent.innerHTML += `
    <table>
    <thead>
    <th>Personnage</th>
    <th>PV</th>
    </thead>
    <tbody>
    <tr>
    <td>Chevalier</td>
    <td>${game.hpKnight}</td>
    </tr>
    <tr>
    <td>Dragon</td>
    <td>${game.hpDragon}</td>
    </tr>
    </tbody>
    </table>`;
}

function initGame() {
  game.difficulty = requestInt(
    "Niveau de difficulté ? \n 1.Facile - 2.Normal - 3.Difficile",
    1,
    3
  );

  game.sword = requestInt(
    "Choix de l'épée ? \n 1.Bois - 2.Acier - 3.Excalibur",
    1,
    3
  );

  game.armor = requestInt(
    "Choix de l'armure ? \n 1.Cuivre - 2.Fer - 3.Magique",
    1,
    3
  );

  switch (game.difficulty) {
    case 1:
      game.hpDragon = getRandomInt(150, 200);
      game.hpKnight = getRandomInt(200, 250);
    case 2:
      game.hpDragon = getRandomInt(200, 250);
      game.hpKnight = getRandomInt(200, 250);
    case 3:
      game.hpDragon = getRandomInt(200, 250);
      game.hpKnight = getRandomInt(150, 200);
  }

  switch (game.sword) {
    case 1:
      game.swordRatio = 0.5;
    case 2:
      game.swordRatio = 1;
    case 3:
      game.swordRatio = 1.5;
  }

  switch (game.armor) {
    case 1:
      game.armorRatio = 1;
    case 2:
      game.armorRatio = 0.75;
    case 3:
      game.armorRatio = 0.5;
  }

  gameContent.innerHTML = `<h2>Points de vie de départ</h2>`;
  pv();
}

function winner() {
  if (game.hpDragon > 0) {
    gameContent.insertAdjacentHTML(
      "afterbegin",
      `<article>
        <img src="img/dragon.png" alt="dragon">
        <h3>Aie aie aie... coup dur. Il restait ${game.hpDragon}PV au Dragon</h3>
    </article>`
    );
  } else {
    gameContent.insertAdjacentHTML(
      "afterbegin",
      `<article>
        <img src="img/knight.png" alt="knight">
        <h3>Tu as triomphé ! Il te restait ${game.hpKnight}PV</h3></article>`
    );
  }
}

function gameLoop() {
  let dmgKnight, dmgDragon, speed;
  do {
    game.round++;

    speed = getRandomInt(1, 2);

    switch (game.difficulty) {
      case 1:
        dmgDragon = getRandomInt(10, 20) * game.armorRatio;
        dmgKnight = getRandomInt(25, 30) * game.swordRatio;
      case 2:
        dmgDragon = getRandomInt(20, 30) * game.armorRatio;
        dmgKnight = getRandomInt(15, 20) * game.swordRatio;
      case 3:
        dmgDragon = getRandomInt(20, 30) * game.armorRatio;
        dmgKnight = getRandomInt(5, 10) * game.swordRatio;
    }

    gameContent.innerHTML += `<h4>==== ROUND N°${game.round} ====</h4>`;

    if (speed === 1) {
      // dragon attaque
      game.hpKnight -= dmgDragon;
      gameContent.innerHTML += `<p> Le dragon attaque en premier et te brûle, tu perds ${dmgDragon}PV ! Ouille ouille !</p>`;
    } else {
      game.hpDragon -= dmgKnight;
      gameContent.innerHTML += `<p> Tu attaques en premier (chance) et cognes le dragon, il perd ${dmgKnight}PV !</p>`;
    }

    pv();
  } while (game.hpDragon > 0 && game.hpKnight > 0);

  winner();
}

function startGame() {
  initGame();
  gameLoop();
}

// main code -----------------------

document.querySelector("#start").addEventListener("click", startGame);
