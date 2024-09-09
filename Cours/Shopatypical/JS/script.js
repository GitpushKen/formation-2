const id_panel = document.querySelector('#id-panel');
const connect = document.querySelector('#connect');
const connect_panel = document.querySelector('#connect-panel');
const inscript = document.querySelector('#inscript');
const inscript_panel = document.querySelector('#inscript-panel');

connect.addEventListener('click', () => {
    id_panel.classList.remove('active');
    connect_panel.classList.add('active');
})
inscript.addEventListener('click', () => {
    id_panel.classList.remove('active');
    inscript_panel.classList.add('active');
})