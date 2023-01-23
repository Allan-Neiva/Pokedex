
const pokemonList = document.getElementById('pokemonList')

const loadMore = document.getElementById('loadMore')
const maxRecords = 151
const limit = 12
let offset = 0;



function loadPokemonsItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        /*mapeou os pokemons da API, converteu em HTML e inclui no nosso html */
        const newHtml = pokemons.map((pokemon) => `
         <li class="pokemon ${pokemon.type}" >
         <span class="number">#${pokemon.number}</span>
         <span class="name">${pokemon.name}</span>
         <div class="detail">
             <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')} 
             </ol>
             <img src="${pokemon.photo}"
                 alt="${pokemon.name}">
         </div>
         </li>`).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonsItems(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit

    const qtRecordNewPage = offset + limit

    if (qtRecordNewPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonsItems(offset, newLimit)
    
        loadMore.parentElement.removeChild(loadMore)
    } else (
        loadPokemonsItems(offset, limit)
    )
})





