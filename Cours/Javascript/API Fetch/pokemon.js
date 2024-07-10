const screenT = document.querySelector(".screen-top");
const screenB = document.querySelector(".screen-bottom");

const containerMain = document.querySelector(".container-main");

const bg_screen = document.querySelector(".screen");
const bg_type = document.querySelector(".bg");
const nameP = document.querySelector(".name");

const screenSprite1 = document.querySelector(".sprite-poke-1");
const screenSprite2 = document.querySelector(".sprite-poke-2");
const infos1 = document.querySelector(".infosPoke1");
const infos2 = document.querySelector(".infosPoke2");

let bottomScreen = document.querySelector(".turn-infos");
let infoPanel = document.querySelector(".infoPanel");

const buttonAttack = document.querySelector(".buttonAttack");
const buttonPotion = document.querySelector(".buttonObject");
const buttonReset = document.querySelector(".buttonReset");

const baseDown = document.querySelector("#baseDown");
const attackDown = document.querySelector("#attackDown");
const defenseDown = document.querySelector("#defenseDown");
const resetDown = document.querySelector("#resetDown");

const soundToggle = document.querySelector("#soundToggle");
const volDown = document.querySelector("#volOn");
const volUp = document.querySelector("#volOff");

const backToggle = document.querySelector("#backToggle");
const backDown = document.querySelector("#backOff");

const pokedex = document.querySelector(".pokedex");
const opened = document.querySelector("#opened");
const closed = document.querySelector("#closed");


const healthBar1 = document.querySelector(".healthBar1");
const healthBar2 = document.querySelector(".healthBar2");

const screenSprites = [];
screenSprites.push(screenSprite1);
screenSprites.push(screenSprite2);

buttonPotion.addEventListener("mousedown", () => {
  defenseDown.classList.add("visible");
  baseDown.classList.remove("visible");
});
buttonPotion.addEventListener("mouseup", () => {
  defenseDown.classList.remove("visible");
  baseDown.classList.add("visible");
});
buttonAttack.addEventListener("mousedown", () => {
  attackDown.classList.add("visible");
});
buttonAttack.addEventListener("mouseup", () => {
  attackDown.classList.remove("visible");
});
buttonReset.addEventListener("mousedown", () => {
  resetDown.classList.add("visible");
});
buttonReset.addEventListener("mouseup", () => {
  resetDown.classList.remove("visible");
});

pokedex.addEventListener('mouseover', () => {
  closed.classList.toggle('hide')
  opened.classList.toggle('visible')
})
pokedex.addEventListener('mouseout', () => {
  closed.classList.toggle('hide')
  opened.classList.toggle('visible')
})
pokedex.addEventListener('click', () => {
  window.location.href = "./index.html";
})

let musicPlay = true;

soundToggle.addEventListener("click", () => {
  volDown.classList.toggle("hide");
  volUp.classList.toggle("hide");
  if (!musicPlay) {
    musicBG[0].play();
    musicPlay = true;
  } else {
    musicBG[0].pause();
    musicPlay = false;
  }
});

backToggle.addEventListener("mousedown", () => {
  backDown.classList.add("hide");
});
backToggle.addEventListener("mouseup", () => {
  backDown.classList.remove("hide");
  window.location.href = "./pokemonTitle.html";
});

// const screens = [];
// screens.push(screenT);
// screens.push(screenB);

// const screensT = [];
// screensT.push(screenTL);
// screensT.push(screenTR);

// const screensB = [];
// screensB.push(screenBL);
// screensB.push(screenBR);

class Pokemon {
  constructor(
    name,
    hp,
    attack,
    defense,
    imgF,
    imgB,
    isKO,
    type,
    isLegendary,
    moves,
    cries
  ) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.imgF = imgF;
    this.imgB = imgB;
    this.isKO = isKO;
    this.type = type;
    this.isLegendary = isLegendary;
    this.moves = moves;
    this.cries = cries;
  }
}

let bgs = [];

let pokemons = [];
let pokemon1 = [];
let pokemon2 = [];
let names = [];
let hps = [];
let attack = [];
let defense = [];

let maxHealth = [];
let currentHealth = [];

let attackBase = Math.floor(Math.random() * (20 - 10) + 10);
let finalDmg = null;

healthBar1.style.width = currentHealth[0] + "px";
healthBar2.style.width = currentHealth[1] + "px";

let lowHP = new Audio();
lowHP.src = "./sounds/lowHP.mp3";

let musicBG = [];
musicBG.push(new Audio());

const pokeBattle = () => {
  let faint1 = new Audio();
  let faint2 = new Audio();

  async function pokeSetter() {
    for (let i = 0; i < 2; i++) {
      let randomPokemon = Math.floor(Math.random() * 386);

      const poke = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
      );
      const data = await poke.json();
      console.log(data);

      const pokeLegend = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${randomPokemon}`
      );
      const dataLegend = await pokeLegend.json();
      console.log(dataLegend);

      pokemons.push(
        new Pokemon(
          data.name,
          data.stats[0].base_stat,
          data.stats[1].base_stat,
          data.stats[2].base_stat,
          data.sprites.front_default,
          data.sprites.back_default,
          false,
          data.types[0].type.name,
          dataLegend.is_legendary,
          data.moves[0].move.name,
          data.cries.latest
        )
      );

      let imgs = [];
      let imgsShiny = [];

      function imgPick() {
        let imgF = document.createElement("img");
        imgF.src = `${data.sprites.other.showdown.front_default}`;
        imgs.push(imgF);

        let imgFS = document.createElement("img");
        imgFS.src = `${data.sprites.other.showdown.front_shiny}`;
        imgsShiny.push(imgFS);

        let imgB = document.createElement("img");
        imgB.src = `${data.sprites.other.showdown.back_default}`;
        imgs.push(imgB);

        let imgBS = document.createElement("img");
        imgBS.src = `${data.sprites.other.showdown.back_shiny}`;
        imgsShiny.push(imgBS);
      }
      imgPick();
      function spritePick() {
        let picker = Math.round(Math.random() * Math.random());
        if (picker === 1) {
          console.log("shiny" + imgsShiny[i].src);
          screenSprites[i].appendChild(imgsShiny[i]);
        } else {
          console.log("pas shiny" + imgs[i].src);
          screenSprites[i].appendChild(imgs[i]);
        }
      }
      spritePick();

      maxHealth.push(pokemons[i].hp);
      currentHealth.push(pokemons[i].hp);

      names.push(data.name);
      hps.push(data.stats[0].base_stat);
      defense.push(data.stats[2].base_stat);
      attack.push(data.stats[1].base_stat);
    }

    let bgSelect = null;

    function bgSet() {
      bgSelect = document.createElement("img");
      if (pokemons[0].isLegendary && pokemons[0].type) {
        musicBG[0].src = `sounds/musics/0.2.mp3`;
        bgSelect.src = `imgs/bgs/legend/${pokemons[0].type}.jpg`;
      } else {
        musicBG[0].src = `sounds/musics/${pokemons[0].type}.mp3`;
        bgSelect.src = `imgs/bgs/${pokemons[0].type}.jpg`;
        bgSelect.onerror = function (e) {
          bgSelect.src = "imgs/bgs/normal.jpg";
        };
      }
    }
    bgSet();
    musicBG[0].volume = 0.1;
    musicBG[0].play();
    bg_type.appendChild(bgSelect);

    document.getElementById("name").innerHTML = ` ${names[0]}`;
    document.getElementById("name2").innerHTML = ` ${names[1]}`;

    healthBar1.max = `${maxHealth[0]}`;
    healthBar1.value = `${currentHealth[0]}`;

    healthBar2.max = `${maxHealth[1]}`;
    healthBar2.value = `${currentHealth[1]}`;

    faint1.src = pokemons[0].cries;
    faint2.src = pokemons[1].cries;
    faint1.volume = 0.3;
    faint2.volume = 0.3;

    // setInterval(function () {document.querySelector(".turn-infos").innerHTML = "Hello"}, 1000);
    // let turn = setInterval
  }
  pokeSetter();

  buttonReset.addEventListener("click", () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  });

  //

  let poundS = new Audio();
  poundS.src = "./sounds/Pound.mp3";
  poundS.volume = 1;





  function healing() {
    let intervalHeal = 20;
    let heal = setInterval(barHealed, 10);

    function barHealed() {
      if (intervalHeal <= 0) {
        clearInterval(heal);
      } else {
        healthBar2.value += 1;
        console.log(healthBar2.value);
        intervalHeal--;

      } 
    }
    console.log("Healed");
    if (currentHealth[1] < maxHealth[1]) {
      currentHealth[1] += 20;
      if (currentHealth[1] >= maxHealth[1] / 6) {
        healthBar2.classList.remove("low");
      }
      if (currentHealth[1] >= maxHealth[1] / 2.5) {
        healthBar2.classList.remove("medium");
      }
      console.log(currentHealth[1]);
      
    } else if (currentHealth[1] - maxHealth[1] > 20) {
      currentHealth[1] == maxHealth[1];
      console.log(currentHealth[1]);

    }
    barHealed();
    console.log(healthBar2.value);
    buttonPotion.removeEventListener("click", healing);
  }


  buttonAttack.addEventListener("click", function turn1() {

    console.log("HP IA: avant" + currentHealth[0]);
    screenSprite2.classList.add("attack");
    screenSprite1.classList.add("attacked");
    poundS.play();
    setTimeout(() => {
      screenSprite2.classList.remove("attack");
      screenSprite1.classList.remove("attacked");
    }, 500);
    let randomBase = Math.round(
      Math.floor(Math.random() * (10 - 5) + 5) *
        (pokemons[1].attack / pokemons[0].defense)
    );
    let interval = randomBase;
    let dmg = setInterval(bar, 10);

    function bar() {
      if (interval <= 0) {
        clearInterval(dmg);
      } else {
        healthBar1.value -= 1;
        console.log(currentHealth[0]);
        console.log(healthBar1.value);
        interval--;
        
      }
    }
    bar();

    currentHealth[0] -= randomBase;
    // On enlève le button pour éviter que le joueur spam entre les attaques
    infoPanel.classList.add("visible");
    console.log("HP IA: après" + currentHealth[0]);
    document.getElementById("turn-infos").innerHTML =
      `${pokemons[0].name}` +
      " perd " +
      `${Math.round(
        Math.floor(Math.random() * (20 - 10) + 10) *
          (pokemons[1].attack / pokemons[0].defense)
      )}` +
      " hps";
    // On vérifie si IA a toujours des HPs
    console.log("vie :" + currentHealth[0]);
    if (currentHealth[0] <= 0) {
      pokemons[0].isKO = true;
      console.log("ko");
    } else if (currentHealth[0] <= maxHealth[0] / 6) {
      healthBar1.classList.add("low");
    } else if (currentHealth[0] <= maxHealth[0] / 2.5) {
      healthBar1.classList.add("medium");
    }
    // Si elle en a pas, on cut, si elle en a toujours, on l'autorise à jouer
    if (pokemons[0].isKO) {
      document.getElementById("turn-infos").innerHTML =
        `${pokemons[0].name}` + " est K.O !";
      setTimeout(() => {
        faint1.play();
        infos1.classList.toggle("end");
        infos2.classList.toggle("end");
        screenSprite1.classList.toggle("end");
      }, 1500);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setTimeout(function turn2() {
        screenSprite2.classList.add("attacked");
        screenSprite1.classList.add("attack");
        setTimeout(() => {
          screenSprite2.classList.remove("attacked");
          screenSprite1.classList.remove("attack");
        }, 500);
        poundS.play();
        // console.log("HP humain: avant" + pokemons[1].hp);

        let randomBase2 = Math.round(
          Math.floor(Math.random() * (20 - 10) + 10) *
            (pokemons[0].attack / pokemons[1].defense)
        );

        currentHealth[1] -= randomBase2;

        let interval2 = randomBase2;
        let dmg2 = setInterval(bar2, 10);

        function bar2() {
          if (interval2 <= 0) {
            clearInterval(dmg2);
          } else {
            healthBar2.value -= 1;
            console.log(currentHealth[1]);
            console.log(healthBar2.value);
            interval2--;
          }
        }
        bar2();
        buttonPotion.addEventListener("click", healing);

        // console.log("HP humain: après" + pokemons[1].hp);
        document.getElementById("turn-infos").innerHTML =
          `${pokemons[1].name}` +
          " perd " +
          `${Math.round(
            Math.floor(Math.random() * (20 - 10) + 10) *
              (pokemons[0].attack / pokemons[1].defense)
          )}` +
          " hps";

        // On vérifie si J1 à toujours des HPs
        if (currentHealth[1] <= 0) {
          pokemons[1].isKO = true;
          console.log("ko");
        } else if (currentHealth[1] <= maxHealth[1] / 6) {
          lowHP.play();
          lowHP.volume = 1;
          healthBar2.classList.add("low");
        } else if (currentHealth[1] <= maxHealth[1] / 2.5) {
          healthBar2.classList.add("medium");
        }

        // Si il en a pas, on cut
        if (pokemons[1].isKO) {
          infoPanel.classList.add("visible");
          document.getElementById("turn-infos").innerHTML =
            `${pokemons[1].name}` + " est K.O !";
          setTimeout(() => {
            faint2.play();
            infos1.classList.toggle("end");
            infos2.classList.toggle("end");
            screenSprite2.classList.toggle("end");
          }, 1500);
          console.log("ko");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          setTimeout(() => {
            infoPanel.classList.remove("visible");
          }, 1000);
        }
      }, 1000);

    }

  });


};

pokeBattle();

// let intervalHeal = 20;
// let heal = setInterval(barHealed, 10);
// function barHealed() {
//   if (intervalHeal <= 0) {
//     clearInterval(heal);
//   } else {
//     healthBar2.value += 1;
//     console.log(currentHealth[1]);
//     console.log(healthBar2.value);
//     intervalHeal--;
//   }
// }

// buttonPotion.addEventListener("click", () => {
//   console.log("Healed");
//   if (currentHealth[1] < maxHealth[1]) {
//     currentHealth[1] += 20;
//     barHealed();
    
//   } else if (currentHealth[1] - maxHealth[1] > 20) {
//     currentHealth[1] == maxHealth[1];
//     barHealed();
//   }
// });

// NE PAS METTRE LES PTN DE PARENTHESES DANS UN EVENT CLICK OU LA FONCTION SERA EXECUTER MEME SANS CLICK

// IDEE : Clear un interval avec un setTimeout