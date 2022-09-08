const personajes = ['Harry','Ron','Hermione'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const[,,p3] = personajes;

console.log (p3)


const retornaArreglo = () => {
    return ['ABC',123];

}

const [letras,numeros]  = retornaArreglo();

console.log(numeros,letras);

//TAREA XD

const usarEstado = (valor) => {
    return [valor,()=>{console.log('Hola Mundo')}];
}



const[nombre,setNombre] = usarEstado('Potter');

console.log(nombre);
setNombre();