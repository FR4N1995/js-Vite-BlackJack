/**
 * Esta funcion permite Tomar una carta
 * @param {Array<string>} deck es un arreglo de string
 * @returns {string} retorna la carta del deck
 */
export const pedirCarta = ( deck) =>{
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log(carta);
    return carta;
}