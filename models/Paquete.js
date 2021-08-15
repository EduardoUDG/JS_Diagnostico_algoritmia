

export default class Paquete {

    
    constructor(id, origen, destino, peso) {
        this.id = id;
        this.origen = origen;
        this.destino = destino;
        this.peso = peso;
        
    }

    setId( id ) {
        this.id = id;
    }
    getId() {
        return this.id;
    }

    setDestino( destino ) {
        this.destino = destino;
    }
    getDestino() {
        return this.destino;
    }

    setOrigen( origen ) {
        this.origen = origen;
    }
    getOrigen() {
        return this.origen;
    }

    setPeso( peso ) {
        this.peso = peso;
    }
    getPeso() {
        return this.peso;
    }

    
}
