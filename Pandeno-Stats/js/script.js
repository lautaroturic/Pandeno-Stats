
let paisesStorage;
let paises;
let darkMode;

if(localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode');
} else {
    darkMode = "light";
}
localStorage.setItem('darkMode', darkMode);

//Chequeo si ya existe y si muestro el boton.
if(localStorage.getItem('listaPaises')) {
    paises = JSON.parse(localStorage.getItem('listaPaises'))
    $('#botonMostrar').removeClass("disabled");
} else {
    paises = [];
    $('#botonMostrar').addClass("disabled");
}
