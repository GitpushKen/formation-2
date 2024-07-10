const pokeObject = document.querySelector(".pokeList");
let list = document.querySelector("#list");
let listItems = null;
const spriteCase = document.querySelector(".sprite")


let names = [];
let imgs = [];
let pokeUnit = [];
let pokemons = [];
let dataPoke = [];
let dataPokeFr = [];




class Pokemon {
  constructor(
    name,
    hp,
    attack,
    defense,
    icon,
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
    this.icon = icon;
    this.imgF = imgF;
    this.imgB = imgB;
    this.isKO = isKO;
    this.type = type;
    this.isLegendary = isLegendary;
    this.moves = moves;
    this.cries = cries;
  }
}

const pokemon = async () => {
  for (let i = 1; i < 152; i++) {

    const pokeFr = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${i}`)
    const dataFr = await pokeFr.json();
    console.log(dataFr);
    dataPokeFr.push(dataFr);

    // On récupère le nom
    names.push(dataFr.name);

    const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await poke.json();
    dataPoke.push(data);
    console.log(data);
  }
  for (let i = 0; i < names.length; i++) {
    console.log(names[i])
    pokemons.push(
        new Pokemon(
          dataPokeFr[i].name[1],
          dataPoke[i].stats[0].base_stat,
          dataPoke[i].stats[1].base_stat,
          dataPoke[i].stats[2].base_stat,
          dataPoke[i].sprites.versions["generation-vii"].icons.front_default,
          dataPoke[i].sprites.front_default,
          dataPoke[i].sprites.back_default,
          dataPoke[i].types[0].type.name,
          dataPoke[i].moves[0].move.name,
          dataPoke[i].cries.latest
        )
      );
  }



function displayList() {
  for (let i = 0; i < names.length; i++) {

    let img = document.createElement("img")
    img.src = `${dataPoke[i].sprites.versions["generation-vii"].icons.front_default}`;

    // function upperCased(string) {
    //   return string.charAt(0).toUpperCase() + string.slice(1);
    // }
    
    let li = document.createElement("li");
    li.classList.add('item');
    
    let p = document.createElement('p');
    p.setAttribute('id',`${[i]}`);
    // p.innerHTML = upperCased(names[i]);
    p.innerHTML = `${names[i].fr}`;

    li.appendChild(p);
    li.appendChild(img);
    list.appendChild(li);
    console.log(pokemons.length);
  }
}

displayList();
function displayInfos() {
  let img = null;
  listItems = document.querySelectorAll(".item")
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      listItems.forEach((item) => {
        item.classList.remove("clicked")
        spriteCase.replaceChildren();
      })
      item.classList.add("clicked")
      for (i = 0; i < listItems.length; i++) {
        if (listItems[i].classList.contains("clicked")) {
          img = document.createElement("img");
          img.src = `${dataPoke[i].sprites.other.showdown.front_default}`;
          spriteCase.appendChild(img);
        }
      }
      console.log('clicked');
    })
  })
  // for (let i = 0; i < list.length; i++) {
  //   list[i].addEventListener("click", function() {
  //     let img = document.createElement("img");
  //     img.src = `${dataPoke[i].sprites.front_default}`;
  //     spriteCase.appendChild(img);
  //     console.log('clicked');
  //   })
  // }
}
displayInfos()
};


pokemon();

// data.sprites.versions.generation-vii.icons.front_default