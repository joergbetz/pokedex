function renderCards(type, currentPokemon, i){
    return `
    <div class="pokedex ${type}">
            <h1 class="pokemonName">${currentPokemon['name']}</h1>
            <div class="id"># ${currentPokemon['id']}</div>
            <div class="card">
                <img class="hover" id="pokemonImage${i}" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}">
                <img id="type${i}" class="icon fire" src="icons/${type}.svg">
            </div>
        </div>`;
}