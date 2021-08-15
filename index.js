import Paqueteria from './models/Paquete.js'
import render from './helpers/render.js'


window.onload = () => {
    const form = document.getElementById('form');

    form.addEventListener( 'submit', event => {
        event.preventDefault();
        const target = event.target;
        const id = target.id.value;
        const origen = target.origen.value;
        const destino = target.destino.value;
        const peso = target.peso.value;

        const paquete = new Paqueteria(
            id,
            origen,
            destino,
            peso
        );


        if( paquete.id ) { render( paquete ); }
        form.reset();
    });

}
