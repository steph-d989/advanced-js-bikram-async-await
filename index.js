//DESARROLLA AQUI TUS SOLUCIONES
//--1--//
const getRandomPokemon = async ()=>{
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
        const data = await response.json();
        const totalPokemon = data.count;
        
        let numeroRandom=Math.floor(Math.random()*totalPokemon)+1

        const otroResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`)
        const otraData = await otroResponse.json();

        return otraData;
    
    }catch (error){
        console.log(error);
    }
}
getRandomPokemon()
    .then((respuesta)=>{console.log(respuesta)}) 
    .catch((error)=>{console.log(error)}) 
//--2--//
const getImageAndName = async (pokemon) => {
    try{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if(response.ok){
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }
}else{
    throw `No se pudo acceder a la URL`
}
}catch(error){
console.log(error)
}
}
//--3--//
const printImageAndName = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        if (response.ok) {
            const data = await response.json();
            const dataResults = data.results;
            console.log(dataResults);
            const numeroRandom=Math.floor(Math.random()*dataResults.length)
            const randomPoke = dataResults[numeroRandom];

            const seccion = document.createElement('section');
            const imagen = document.createElement('img');
            imagen.setAttribute('src', `https://pokeapi.co/api/v2/pokemon/${numeroRandom+1}`);
            imagen.setAttribute('alt', randomPoke.name);
            const encabezado = document.createElement('h1')
            encabezado.textContent=`${randomPoke.name}`
            seccion.append(imagen, encabezado);
            return seccion;
        
        } else {
            throw `No se encontro la URL`
        }
    } catch (error) {
        console.log(error)
    }

}
printImageAndName()
    .then((resp)=>{
        if(resp){
            document.body.append(resp);
        }
    })
    .catch((error)=>{
        console.log(error)
    })
//--4--//

//--5--//

//--6--//

//--7--//
