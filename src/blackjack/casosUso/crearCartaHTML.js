
/**
 * 
 * @param {*} carta 
 */
export const crearcarta = (carta) =>{
    const imgCartacompu = document.createElement('img');
    imgCartacompu.src= `./assets/cartas/${carta}.png`;
    imgCartacompu.classList.add('carta');
    return imgCartacompu;
}
