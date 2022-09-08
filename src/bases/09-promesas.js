import { getHeroeById, getHoroesByOwner } from "./bases/08-imports";

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            
            const heroe = getHeroeById(id);
            
            if(heroe){
                resolve(heroe);
            }else{
            reject('No se pudo encontrar el heroe');}
    
    
        },500)
    
    } );
}

getHeroeByIdAsync(3)
    // .then (heroe => console.log('Heroe', heroe))
    .then (console.log)
    // .catch ( error => console.warn(error))
    .catch(console.warn)
    
    