"use strict";



// mes variables-------------------------------------------------------------------


let game = new Object ();



// Mes fonction-----------------------------------------------------------

// chiffre random entre min et max
function getRandomInt(min, max) {
    return Math.floor (Math.random() * (max - min+1) + min);
  };


// fonction appel nombre
function requestInt(message, min, max) {
    let nb;
    do {
        nb = parseInt (prompt(message,2));
    }
while ((nb < min) || (nb > max) || isNaN(nb));
return nb;
}


// fonction dégat dragon
function dmgDragon(){
let damage;

    switch(game.difficulty) {

    case 1:
    damage = getRandomInt(10, 20);
    break;
    case 2:
    case 3:
    damage = getRandomInt(20, 30);
    break;

        }
    return Math.floor( damage*game.armorRatio);
}

// fonction dégat chevalier
function dmgKnight(){
let damage;

    switch(game.difficulty) {

        case 1:
        damage = getRandomInt(25, 30);
        break;
        case 2:
        damage = getRandomInt(15, 20);
        break;
        case 3:
        damage = getRandomInt(5, 30);
        break;
        }
    return Math.floor( damage*game.swordRatio);

}

function displayHP() {
    DIV.innerHTML += `
    <table>
        <thead>
            <tr>
                <th>Personnage</th>
                <th>PV</th>
            </tr>
        </thead>
         <tbody>   
        <tr>
        <td>chevalier</td>
        <td>${game.hpKnight}</td>
        </tr>
        <tr>
        <td>dragon</td>
        <td>${game.hpDragon}</td>
        </tr>
        </tbody>
        </table>
`;
}

function showWinner () {
    if (game.hpDragon>0) {
        DIV.insertAdjacentHTML("afterbegin",  `<article> <img src="img/dragon.png" alt="dragon">
        <h2>Get rekt son lol. Git gut.</h2>
        <p>Il restait ${game.hpDragon} PV au dragon</p> </article>`)
    } else {
        DIV.insertAdjacentHTML("afterbegin", `<article> <img src="img/knight.png" alt="chevalier">
        <h2>Vous avez gagné, GG !</h2>
        <p>Il vous restait ${game.hpKnight} PV</p> </article> `)
    }
}


function startGame () {
    initGame();
    gameLoop();
}


// fonction initialisation du jeu
function initGame () {

game.round=0;    

game.difficulty = requestInt("Niveau de difficulté ? \n 1. Facile - 2. Normal - 3. Difficile", 1, 3);

switch(game.difficulty)
{
    case 1:
    game.hpDragon= getRandomInt(150, 200);
    game.hpKnight= getRandomInt(200, 250);
    break;
    case 2:
    game.hpDragon= getRandomInt(200, 250);
    game.hpKnight= getRandomInt(200, 250);
    break;
    case 3:
    game.hpDragon= getRandomInt(200, 250);
    game.hpKnight= getRandomInt(150, 200);
    break;


    };

game.armor = requestInt("Armure ? \n 1. Cuivre - 2. Fer - 3. Magique ", 1, 3);

switch(game.armor)
{
    case 1:
    game.armorRatio = 1;
    break;
    case 2:
    game.armorRatio = 0.75;
    break;
    case 3:
    game.armorRatio = 0.5;
    break;

    };

game.sword = requestInt("Epée ? \n 1. bois - 2. acier - 3. Excalibur ", 1, 3);

switch(game.sword)
{
    case 1:
    game.swordRatio = 0.5;
    break;
    case 2:
    game.swordRatio = 1;
    break;
    case 3:
    game.swordRatio = 1.5;
    break;

    };

    DIV.innerHTML += `<h3>Points de vie de départ</h3>`;
    displayHP();

};


function gameLoop() {


    let damage;

    do {
        game.round += 1;
        let speed = getRandomInt(1, 2);
       
        DIV.innerHTML += `
        <h3>----- Tour n°${game.round} -----</h3>
        `
        // dragon attaque
        if (speed===1) {
            damage = dmgDragon();
            game.hpKnight -= damage;

            DIV.innerHTML += `<p> Le dragon attaque et vous arrache le slip. Vous perdez ${damage} PV. </p>`;

           displayHP();
    

        } else {
            
            // chevalier attaque
            damage = dmgKnight();
            game.hpDragon -= damage;
            
           DIV.innerHTML += `<p> Vous attaquez le dragon et lui éclatez sa face. Le dragon perd ${damage} PV.</p>`;

            displayHP();
        }

        

    }
    while (game.hpKnight>0 && game.hpDragon > 0)

    showWinner();
}

//main code ----------------------------------------------

// déclarer l'injection du texte
let DIV = document.querySelector("#game");

startGame ()


// console.log(game);








// le code déchu

/*
function gameLoop() {
    console.log("Le chevalier a " + game.hpKnight + " HP, le dragon a " + game.hpDragon + " HP.")
    console.log("------------------------------------------------------------------------------")

    do {
        game.round += 1;
        let speed = getRandomInt(1, 2);
        let dmgDragon;
        let dmgKnight;

        

        if (speed===1) {
            switch(game.difficulty) {

            case 1:
            dmgDragon = getRandomInt(10, 20)*game.armorRatio;
            game.hpKnight -= dmgDragon
            break;
            case 2:
            case 3:
            dmgDragon = getRandomInt(20, 30)*game.armorRatio;
            game.hpKnight -= dmgDragon
            break;

            
            }

            console.log("le dragon attaque et inflige " + dmgDragon + " dégats au chevalier !")

        } else {
            switch(game.difficulty) {

            case 1:
            dmgKnight = getRandomInt(25, 30)*game.swordRatio;
            game.hpDragon -= dmgKnight
            break;
            case 2:
            dmgKnight = getRandomInt(15, 20)*game.swordRatio;
            game.hpDragon -= dmgKnight
            break;
            case 3:
            dmgKnight = getRandomInt(5, 30)*game.swordRatio;
            game.hpDragon -= dmgKnight
            break;
            }

            console.log("le chevalier attaque et inflige " + dmgKnight + " dégats au dragon !")
        }

        console.log("Round n° "+ game.round + " | " + " PV chevalier " + game.hpKnight + " PV dragon " + game.hpDragon);
        console.log(" ");

    }
    while (game.hpKnight>0 && game.hpDragon > 0)

    if (game.hpKnight>game.hpDragon) {
        console.log("Félicitation, vous avez gagné !")
    } else {
        console.log("Get rekt son lol")

    }
}
*/