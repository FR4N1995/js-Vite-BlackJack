
import _ from 'underscore';
import {crearDeck} from './casosUso/crear-deck';
import {pedirCarta} from './casosUso/pedirCarta';
import {valorCarta} from './casosUso/valorCarta';
import { turnoComputadora} from './casosUso/turnoCompu';
import {crearcarta } from './casosUso/crearCartaHTML';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador= 0
let puntosComputadora = 0;
const btnPedir = document.querySelector('#btnpedir');
const btnDetener = document.querySelector('#btndetener');
const btnNewGame = document.querySelector('#btnnuevo');

const smalls = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divcartasComputadora = document.querySelector('#computadora-cartas');


deck = crearDeck(tipos, especiales);


// pedirCarta();




//Eventos
btnPedir.addEventListener('click', () =>{
    const carta = pedirCarta(deck);
    puntosJugador = puntosJugador + valorCarta(carta);
    smalls[0].innerHTML = puntosJugador;
    const imgCarta = crearcarta(carta);
    divCartasJugador.appendChild(imgCarta);
    // console.log(carta);
    if (puntosJugador > 21) {
        console.warn('Lo siento perdiste..');
        turnoComputadora(puntosJugador, smalls[1], divcartasComputadora, deck );
        btnPedir.disabled= true;
        btnDetener.disabled = true;
    }else if(puntosJugador === 21){
        console.warn('21 Genial!!');
        turnoComputadora(puntosJugador, smalls[1], divcartasComputadora, deck );
        btnPedir.disabled= true;
        btnDetener.disabled=true;

    }
})

btnDetener.addEventListener('click', () =>{
    // console.log('click');
    btnPedir.disabled=true;
    btnDetener.disabled =true;
    turnoComputadora(puntosJugador, smalls[1], divcartasComputadora, deck );
});

btnNewGame.addEventListener('click', () =>{
   deck = [];
   deck = crearDeck(tipos, especiales);

   smalls[0].innerHTML = 0;
   smalls[1].innerHTML = 0;

   puntosComputadora = 0;
   puntosJugador = 0;
   divCartasJugador.innerHTML = '';
   divcartasComputadora.innerHTML = '';

   btnPedir.disabled= false;
   btnDetener.disabled = false;

});


// setupCounter(document.querySelector('#counter'))
