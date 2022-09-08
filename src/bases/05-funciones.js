// Funciones en JS

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}


const saludar2 = (nombre) => {
    return `Holaa, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;



console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

function getUsuarioActivo (nombre) {

    return {
        uid: 'ABC567',
        username : nombre
    }


}

const usuarioActivo = getUsuarioActivo('Ignacio');
console.log (usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({ uid: 'ABC568',username: nombre})

const usuarioActivo2 = getUsuarioActivo2('Nacho');
console.log (usuarioActivo2);