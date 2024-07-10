const screen = document.getElementById("screen");
const screenOff = document.getElementById("screenOff");
const overlays = document.getElementById("overlays");

const entered = document.getElementById("entered");
const notEntered = document.getElementById("notEntered");
const titleScreen = document.getElementById("title-screen");
const selectSave = document.getElementById("select-save");

const cartridgeCase = document.getElementById("cartridge-case");
const cartridgeScreen = document.getElementById("cartridge-screen");
const popup1 = document.getElementById("popup-1");

const mainSave = document.getElementById("main-save");

const sword = document.getElementById("sword");
const gauntlet = document.getElementById("gauntlet");
const gitKey = document.getElementById("gitKey");

const face = document.getElementById("face");
const specs = document.getElementById("specs");
const avatar = document.getElementById("avatar");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");



const lore = document.getElementById("lore");
const swordTxt = document.getElementById("swordTxt");
const gauntletTxt = document.getElementById("gauntletTxt");
const gitKeyTxt = document.getElementById("gitKeyTxt");

const disk = document.getElementById("disk");
const lightDisk = document.getElementById("lightDisk");

const nDisk = document.getElementById("nDisk");
const nDisk2 = document.getElementById("nDisk2");
const nDisk3 = document.getElementById("nDisk3");



let isOn = false;
let isAGameIn = false;


card1.addEventListener("click", () => {
    nDisk.classList.add("pluggedIn")
    nDisk.classList.remove("pluggedOff")
    nDisk2.classList.remove("pluggedIn")
    nDisk3.classList.remove("pluggedIn")
})
card2.addEventListener("click", () => {
    nDisk.classList.add("pluggedOff")
    nDisk2.classList.add("pluggedIn")
    nDisk3.classList.remove("pluggedIn")
})
card3.addEventListener("click", () => {
    nDisk.classList.add("pluggedOff")
    nDisk2.classList.remove("pluggedIn")
    nDisk3.classList.add("pluggedIn")
})

cartridgeCase.addEventListener("click", () => {
    if (isAGameIn) {
        popup1.classList.add("showed")
    } else {
        cartridgeScreen.classList.add("switchedOn")
    }
})
cartridgeScreen.addEventListener("click", () => {
    cartridgeScreen.classList.remove("switchedOn")
})

titleScreen.addEventListener("click", () => {
    selectSave.classList.toggle("switchedOn")
    titleScreen.classList.remove("switchedOn")
})

mainSave.addEventListener("click", () => {
    selectSave.classList.remove("switchedOn")
    entered.classList.toggle("switchedOn")

})

disk.addEventListener("click", () => {
    disk.classList.toggle("plugged")
    onChecker()
    });

function onChecker() {
    if (isOn) {
        selectSave.classList.remove("switchedOn")
        titleScreen.classList.remove("switchedOn")
        notEntered.classList.remove("switchedOff")
        entered.classList.remove("switchedOn")
        lightDisk.classList.remove("plugged")
        isOn = false;
} else {
    lightDisk.classList.toggle("plugged")
    overlays.classList.toggle("switchedOn")
    screen.classList.toggle("switchedOn")
    titleScreen.classList.toggle("switchedOn")
    notEntered.classList.toggle("switchedOff")
    isOn = true;
}
}
sword.addEventListener("click", () => {
    swordTxt.classList.toggle("visible")
    gauntletTxt.classList.remove("visible")
    gitKeyTxt.classList.remove("visible")
})
gauntlet.addEventListener("click", () => {
    swordTxt.classList.remove("visible")
    gauntletTxt.classList.toggle("visible")
    gitKeyTxt.classList.remove("visible")
})
gitKey.addEventListener("click", () => {
    gitKeyTxt.classList.toggle("visible")
    swordTxt.classList.remove("visible")
    gauntletTxt.classList.remove("visible")
})

face.addEventListener("click", () => {
    swordTxt.classList.remove("visible")
    gauntletTxt.classList.remove("visible")
    gitKeyTxt.classList.remove("visible")
    lore.classList.add("visible")
})