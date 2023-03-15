function renderCards(type, currentPokemon, i){
    return `
    <div class="pokedex ${type}">
            <h1 class="pokemonName">${currentPokemon['name']}</h1>
            <div class="id"># ${currentPokemon['id']}</div>
            <div class="card" ">                
                <img onclick="openCard(${i})"class="hover" id="pokemonImage${i}" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}">
                <div class="type-container" id="card${i}"></div>
            </div>
        </div>`;
}

function renderTypes(type){
    return `
    <img class="icon ${type}" src="icons/${type}.svg"></img>`;
}