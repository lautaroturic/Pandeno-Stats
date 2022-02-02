$(() => {
    //DarkMode y LightMode
    if(localStorage.getItem('darkMode') == "dark") {
        $('body').addClass('darkMode')
        $('body').removeClass('lightMode')
        $('#btnDarkMode').hide()
        $('#btnLightMode').show()
        $('nav').addClass('navbar-dark bg-dark')
        $('nav').removeClass('navbar-light bg-primary')
        $('table').removeClass('table-primary')
        $('table').addClass('table-secondary')
        $('.card').removeClass('text-white bg-primary')
        $('.card').addClass('bg-dark')
        $('.paisTabla').removeClass('table-light')
        $('.paisTabla').addClass('table-dark')
        $('.modal-content').removeClass('bg-primary')
        $('.modal-content').addClass('bg-dark')
    } else {
        $('#btnLightMode').hide()
        $('body').addClass('lightMode')
        $('body').removeClass('darkMode')
    }

    $('#btnDarkMode').click(() => {
        $('body').addClass('darkMode')
        $('body').removeClass('lightMode')
        $('#btnDarkMode').hide()
        $('#btnLightMode').show()
        $('nav').addClass('navbar-dark bg-dark')
        $('nav').removeClass('navbar-light bg-primary')
        $('table').removeClass('table-primary')
        $('table').addClass('table-secondary')
        $('.card').removeClass('text-white bg-primary')
        $('.card').addClass('bg-dark')
        $('.paisTabla').removeClass('table-light')
        $('.paisTabla').addClass('table-dark')
        $('.modal-content').removeClass('bg-primary')
        $('.modal-content').addClass('bg-dark')
        localStorage.setItem('darkMode', "dark")
    })
    $('#btnLightMode').click(() => {
        $('#btnDarkMode').show()
        $('#btnLightMode').hide()
        $('body').removeClass('darkMode')
        $('body').addClass('lightMode')
        $('nav').removeClass('navbar-dark bg-dark')
        $('nav').addClass('navbar-light bg-primary')
        $('table').addClass('table-primary')
        $('table').removeClass('table-secondary')
        $('.card').addClass('text-white bg-primary')
        $('.card').removeClass('bg-dark')
        $('.paisTabla').addClass('table-light')
        $('.paisTabla').removeClass('table-dark')
        $('.modal-content').addClass('bg-primary')
        $('.modal-content').removeClass('bg-dark')
        localStorage.setItem('darkMode', "light")
    })
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
        $('#formulario').trigger("reset");
    })
    //Muestro informacion del storage a traves de un boton
    $('#botonMostrar').click(() => {
        paisesStorage = JSON.parse(localStorage.getItem('listaPaises'))
        paisesStorage.sort((a, b) => (a.pais > b.pais) ? 1 : -1)
        console.log("Click");
        $('#paisesCargados').empty();
        paisesStorage.forEach((paisenlista) => {
            $('#paisesCargados').append(`
            <tr class="paisTabla table-${localStorage.getItem('darkMode')}">
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
    //Buscador por nombre
    $('#buscarPais').submit((e) => {
        e.preventDefault()
        paisesStorage = JSON.parse(localStorage.getItem('listaPaises'))
        let buscado = $('#botonBuscar').val();
        console.log(buscado);
        let resultado = paisesStorage.filter(pais => pais.pais == buscado);
        console.log(resultado)
        $('#paisesCargados').empty();
        resultado.forEach((paisenlista) => {
            $('#paisesCargados').append(`
            <tr class="paisTabla table-${localStorage.getItem('darkMode')}">
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
        })
    })
    
})