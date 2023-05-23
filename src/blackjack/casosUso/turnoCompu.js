import { pedirCarta } from './pedirCarta.js'
import { valorCarta} from './valorCarta.js';
import { crearcarta} from './crearCartaHTML.js';



/**
 * turno de lacomputadora
 * @param {number} pointsPlayer puntos del jugador  
 * @param {HTMLElement} elementohtml elemento html para mostrar los puntos
 *  @param {HTMLElement} divcartasComputadora elemento html para mostrar las cartas
 * @param {Array<String>} crearDeck 
 */
export const turnoComputadora = (pointsPlayer, elementohtml, divcartasComputadora,  deck = []) =>{

    //Validacion
    if(!pointsPlayer) throw new Error ('Los puntos del jugador son necesarios');
    if(!elementohtml) throw new Error('El deck de cartas es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta(carta)
        elementohtml.innerHTML = puntosComputadora;
        const imgCartacompu = crearcarta(carta)
        divcartasComputadora.appendChild(imgCartacompu);
        
        if(pointsPlayer > 21){
            break;
        }
        
    } while ((puntosComputadora < pointsPlayer) && (pointsPlayer <= 21));

    setTimeout(() => {
        if (puntosComputadora === pointsPlayer) {
            alert('Nadie Gana!');
        } else if(pointsPlayer > 21){
            alert('Computadora Gana');
        }else if(puntosComputadora > 21){
            alert('Jugador Gana');
        }else{
            alert('Computadora Gana');
        }
        
    }, 300);


}
