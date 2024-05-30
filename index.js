//DESARROLLA AQUI TUS SOLUCIONES
//--1--//
const getRandomPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
        const data = await response.json();
        const totalPokemon = data.count;

        let numeroRandom = Math.floor(Math.random() * totalPokemon) + 1

        const otroResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`)
        const otraData = await otroResponse.json();

        return otraData;

    } catch (error) {
        console.log(error);
    }
}
getRandomPokemon()
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.log(error) })
//--2--//
const getImageAndName = async (pokemon) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        if (response.ok) {
            let data = await response.json();
            let name = data.name;
            let img = data.sprites.front_default;
            return { name, img }
        } else {
            throw `No se pudo acceder a la URL`
        }
    } catch (error) {
        console.log(error)
    }
}
//--3--//
const printImageAndName = async () => {
try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    if (response.ok) {
        const data = await response.json();
        const dataResults = Object.values(data.results);
        const numeroRandom = Math.floor(Math.random() * dataResults.length)
        const randomPoke = dataResults[numeroRandom]; 
        return `<section><img alt=${randomPoke.name} src= ${randomPoke.url}> 
            <h1>${randomPoke.name}</h1></section>`;
    } else {
        throw `No se encontro la URL`
    }
} catch (error) {
    throw error
}
}
printImageAndName()
    .then((resp) => {
        if (resp) {
            console.log(seccion)
        }
    })
    .catch((error) => {
        console.log(error)
    })
//--4--//
/*Ejercicio 4.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio*/
const getRandomDogImage = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
    try {
        if (response.ok) {
            const data = await response.json();
            return data.message
        } else {
            throw `No se encontro la URL`
        }

    } catch (error) {
        console.log(error);
    }
}
getRandomDogImage()
    .then((resp) => {
        console.log(resp)
    })
    .catch((error) => {
        console.log(error)
    })

//--5--//
//Ejercicio 5.- Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio.
const getRandomPokemonImage = async () => {
    const numeroRandom = Math.floor(Math.random() * 1025)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`)
    try {
        if (response.ok) {
            const data = await response.json();
            const resultados = data.sprites.front_default
            return resultados;
        } else {
            throw `No se pudo acceder a la URL`
        }
    } catch (error) {
        console.log(error)
    }
}

getRandomPokemonImage()
    .then((resp) => {
        console.log(resp)
    })
    .catch((error) => {
        console.log(error)
    })
//--6--//
/*Ejercicio 7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio.*/
const getRandomCharacter = async () => {
    const numeroRandom = Math.floor(Math.random() * 826);
    const response = await fetch(`https://rickandmortyapi.com/api/character/${numeroRandom}`)
    try {
        if (response.ok) {
            const data = await response.json();
            const dataPersonaje = data.name;
            return data
        } else {
            throw `No se encontro la URL`
        }
    } catch (error) {
        console.log(error);
    }
}
getRandomCharacter()
    .then((resp) => {
        console.log(resp);


    })
    .catch((error) => {
        console.log(error)
    })

    //--7--//
    /*Ejercicio 8.- Declara una función **getRandomCharacterInfo** que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})*/

    const getRandomCharacterInfo = async()=>{
        let objeto;
        const numeroRandom = Math.floor(Math.random()*825)
        const responseCaracter = await fetch(`https://rickandmortyapi.com/api/character/${numeroRandom}`)

        try {
         if (responseCaracter.ok) {
            const data1 = await responseCaracter.json();
            objeto = 
            {
                'img': data1.image,
                'name': data1.name,
                'episodes': data1.episode,
                'firstEpisode': data1.episode[0]
            }
         } else {
            throw `No se encontro la URL`
         }
         const responseEpisodes = await fetch(`${objeto.firstEpisode}`)
         if(responseEpisodes.ok){
            const data2 = await responseEpisodes.json();
            console.log(data2)
            objeto = { ...objeto, 'dateEpisode' : data2.air_date}
            return objeto
         }
        } catch (error) {
            console.log(error)
        }
    }
    getRandomCharacterInfo()
        .then((resp)=>{
            console.log(resp)
        })
        .catch((error)=>{
            console.log(error)
        })