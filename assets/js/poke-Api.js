//Promessao (calback)
//requisisção
//=> airfunctio
const pokeApi = {}

pokeApi.getpokemonDetail = (pokemon) => {
return fetch(pokemon.url)
.then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0,limit = 10) => {
   
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
    //(then) sucesso da operaçao
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getpokemonDetail))
    .then((requestePromisse) => Promise.all(requestePromisse))
    .then((pokemonDatails) => pokemonDatails)
    .catch((error) => console.error(error))
}