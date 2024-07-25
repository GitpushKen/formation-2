const headItems = document.querySelectorAll('.head > .test');
const bodyItems = document.querySelectorAll('.body > .test');
const nbSlide1 = headItems.length;
const nbSlide2 = headItems.length;
const suivant1 = document.querySelector('#three');
const suivant2 = document.querySelector('#four');
const precedent1 = document.querySelector('#one');
const precedent2 = document.querySelector('#two');
const bearbToggle = document.querySelector('#bearb-toggle');
const saiyanToggle = document.querySelector('#saiyan-toggle');
const saiyan = document.querySelector('.saiyan');
const human = document.querySelector('.human');
const bearb = document.querySelector('.bearb');
const bearb2 = document.querySelector('.bearb2');
const bearb3 = document.querySelector('.bearb3');
const auraBase = document.querySelector('.slide4');
const aura = document.querySelector('#auraBase');
let count1 = 0;
let count2 = 0;

let croissants = 0;

let isSaiyan = false;
let transformSound = new Audio();

saiyanToggle.addEventListener('click', () => {
    if (isSaiyan) {

        isSaiyan = false;
        console.log(isSaiyan);
        transformSound.pause();
        saiyan.classList.toggle('active');
        human.classList.toggle('active');
       
    } else if (!isSaiyan) {

        isSaiyan = true;
        transformSound.src = './character/sounds/transform.mp3';
        transformSound.play();
        console.log(isSaiyan);
        setTimeout(() => {
            saiyan.classList.toggle('active');
            human.classList.toggle('active');
        }, 200)


    }
})




bearbToggle.addEventListener('click', () => {
    bearb.classList.toggle('hidden')
    bearb2.classList.toggle('hidden')
    bearb3.classList.toggle('hidden')
})

function slidesuivant1e1(){
    headItems[count1].classList.remove('active');

    if(count1 < nbSlide1 - 1){
        count1++;
    } else {
        count1 = 0;
    }

    headItems[count1].classList.add('active')
    console.log(count1);

    if (count1 == 3) {
        console.log("active")
        aura.classList.add('active');
    } else {
        aura.classList.remove('active');
    }
    
}

// saiyanToggle.addEventListener('click', () => {
//     headItems[0, 1, 2].classList.remove('active')
//     headItems[4].classList.add('active')

// })

suivant1.addEventListener('click', slidesuivant1e1)

function slidesuivant1e2(){
    bodyItems[count2].classList.remove('active');

    if(count2 < nbSlide2 - 1){
        count2++;
    } else {
        count2 = 0;
    }

    bodyItems[count2].classList.add('active')
    console.log(count2);

    
    
}
suivant2.addEventListener('click', slidesuivant1e2)


function slideprecedent1e1(){
    headItems[count1].classList.remove('active');

    if(count1 > 0){
        count1--;
    } else {
        count1 = nbSlide1 - 1;
    }

    headItems[count1].classList.add('active')
    // console.log(count1);
    if (count1 == 3) {
        console.log("active")
        aura.classList.add('active');
    } else {
        aura.classList.remove('active');
    }
    
}
precedent1.addEventListener('click', slideprecedent1e1)

function slideprecedent1e2(){
    bodyItems[count2].classList.remove('active');

    if(count2 > 0){
        count2--;
    } else {
        count2 = nbSlide2 - 1;
    }

    bodyItems[count2].classList.add('active')
    // console.log(count1);
    
}
precedent2.addEventListener('click', slideprecedent1e2)

