import heroes, {owners} from '../data/heroes'

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id == id)

// console.log(getHeroeById(3));

export const getHoroesByOwner = (owner) => heroes.filter ((x) => x.owner == owner)

// console.log(getHoroesByOwner('Marvel'));

const a = getHoroesByOwner('DC');

// console.table(a)

// console.log(owners)

// export default getHeroeById;