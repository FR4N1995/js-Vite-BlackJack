import _ from 'underscore';
// creacion del deck
/**
 * Esta funcion crea un nuevo deck de cartas
 * @param {Array<string>} tipos ejemplo ['C', 'D', 'H', 'S'] 
 * @param {Array<string>} especiales  ejemplo ['A', 'J', 'Q', 'K']
 * @returns retorna un nuevo deck de cartas
 */
export const crearDeck = (tipos, especiales) =>{
    // ambas formas funcionan igual
    // for (let i = 2; i <= 10; i++){
    //    tipos.forEach(tipo => {
    //         deck.push(i + tipo);
    //         // console.log(deck);
    //    });
    // }

    if(!tipos || tipos.length === 0) throw new Error('Tipos de carta es obligatorio como un arreglo de String');
    if(!especiales || especiales.length === 0) throw new Error('Tipos especiales Obligatorios como un arreglo de string');

    
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos)
        deck.push(i + tipo);
    }

    for (let esp of especiales){
        for (let tipo of tipos)
        deck.push(esp + tipo);
    }
    console.log(deck);
    // .-shuffle es un metodo de una libreria que sirve para mezclar los valores de un arreglo
    deck = _.shuffle(deck);
    console.log(deck);


    return deck;
}


// Esta linea lo que esta haciendo es poner la funcion creardeck para exportar como default
// export default crearDeck;