/*Por hacer 
Tene en cuenta separarlo en al menos dos archivos
( Por un lado el constructor , por otro las funcionalidades por ejemplo ) 
es algo que el profe menciono que tiene en cuenta para la corrección final .

Te recomiendo agregar mas aun , algún botón de novedades , eventos que 
hagan la pagina mas dinámica (dark mode ) , algún formulario de registro 
para que puedan llegarle novedades al usuario .

Esta la carpeta de los proyectos de Coder por si queres ver ideas :)

Intentar
Que se vea un mapa, usar una lista de paises con los datos de habitantes
ya cargados, ver api de covid??
---------------------------------------------
*/
//Comparar los porcentajes de muertos o contagiados por millon de habitantes de una lista de paises y mostrarlos en la pagina
class PaisCalculable {
    constructor(pais, habitantes, muertos, contagiados){
        this.pais = pais.toLowerCase();
        this.nombrePais = pais.charAt(0).toUpperCase() + pais.slice(1);
        this.habitantes = habitantes;
        this.muertos = muertos;
        this.contagiados = contagiados;
        this.resultadoMuertos = (this.muertos / this.habitantes) * 1000000;
        this.resultadoContagios = (this.contagiados / this.habitantes) * 1000000;
        this.porcentajeContagios = (this.contagiados * 100) / this.habitantes;
        this.porcentajeMuertos = (this.muertos * 100) / this.habitantes;
        this.letalidad = (this.muertos * 100) / this.contagiados;
    }
}
let paisesStorage;
let paises;


//Chequeo si ya existe
if(localStorage.getItem('listaPaises')) {
    paises = JSON.parse(localStorage.getItem('listaPaises'))
    $('#botonMostrar').removeClass("disabled");
} else {
    paises = [];
    $('#botonMostrar').addClass("disabled");
    //deshabilitar boton mostrar
}

$(() => {
    //Obtengo informacion del formulario 
    $('#formulario').submit((e) => {
        e.preventDefault()
        let nombreDelPais = $('#nombre').val()
        let habitantesPais =$('#habitantes').val()
        let contagiosPais = $('#contagiados').val()
        let muertosPais = $('#muertos').val()
        let objetoPais = new PaisCalculable(nombreDelPais, habitantesPais, muertosPais, contagiosPais)
        paises.push(objetoPais);
        localStorage.setItem('listaPaises', JSON.stringify(paises));
        $('#botonMostrar').removeClass("disabled");
        paises = [];
        $('#formulario').trigger("reset");
    })
    //Muestro informacion del storage a traves de un boton
    $('#botonMostrar').click(() => {
        paisesStorage = JSON.parse(localStorage.getItem('listaPaises'))
        console.log("Click");
        $('#paisesCargados').empty();
        paisesStorage.forEach((paisenlista) => {
            $('#paisesCargados').append(`
            <tr class="table-active">
                <th scope="row">${paisenlista.nombrePais}</th>
                <td>${paisenlista.habitantes}</td>
                <td>${paisenlista.contagiados}</td>
                <td>${paisenlista.muertos}</td>
                <td>${paisenlista.resultadoContagios}</td>
                <td>${paisenlista.resultadoMuertos}</td>
                <td>${paisenlista.porcentajeContagios}</td>
                <td>${paisenlista.porcentajeMuertos}</td>
                <td>${paisenlista.letalidad}</td>
            </tr>
            `)
        console.log(`Ahi va ${paisenlista.pais}`)
        }) 
    })
})