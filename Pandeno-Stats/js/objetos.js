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
