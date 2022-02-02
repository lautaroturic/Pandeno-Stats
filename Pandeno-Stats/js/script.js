/*Por hacer 
navbar <-
Darkmode con boton en la nav <-
fromulario de contacto<-
orden alfabetico paises <-
buscador por nombre de lista<-
hacer barra de progreso con el total mundial X

tratar de hacer una parte de info parcial con api
---------------------------------------------
*/
//Comparar los porcentajes de muertos o contagiados por millon de habitantes de una lista de paises y mostrarlos en la pagina

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
