
const iconPlus = document.querySelector('#icon_plus');
const iconbar = document.querySelector('#icon_bar');
const moreIcons = document.querySelector('#more-icons');
const icons = document.querySelectorAll('.icons');
const bar1 = document.querySelector('#bar_one');
const bar2 = document.querySelector('#bar_two');
const burger = document.querySelector('#burger');
const registered = document.querySelector('#registered');
const rBg = document.querySelector('#r-bg');

let deployed = false;  

iconPlus.addEventListener('click', () => {
    bar1.classList.toggle('rotated')
    bar2.classList.toggle('rotated2')
    moreIcons.classList.toggle('visible')
    console.log(icons.length)

    deploy();
    // for (i = 0; i < icons.length; i++) {
    //     setTimeout(deploy,5000)
    // }
})

burger.addEventListener('click', () => {
    console.log('test')
})

// function deploy() {
//     for (i=0; i<12; i++) {
//         let iconUnit = document.createElement('img');
//         iconUnit.src = `./assets/imgs/icons/more/${[i]}.svg`;
//         iconUnit.classList.add('icons');
//         iconbar.appendChild(iconUnit);
//     }
// }

function deploy() {
    icons.forEach(icon => {
        setInterval(icon.classList.toggle('visible'), 2000)
    });
}