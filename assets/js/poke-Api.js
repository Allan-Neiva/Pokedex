//Promessao (calback)
//requisisção
//=> airfunctio
const pokeApi = {}

pokeApi.getPokemons = (offset = 0,limit = 10) => {
   
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
    //(then) sucesso da operaçao
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)

    .catch((error) => console.error(error))

}
   
