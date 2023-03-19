function renderCards(type, currentPokemon, i) {
    return `
    <div class="pokedex ${type}">
        <h1 class="pokemonName">${currentPokemon['name']}</h1>
        <div class="id"># ${currentPokemon['id']}</div>
        <div class="card"> 
            <div class="card-img">               
                <img onclick="openCard(${i})"class="hover" id="pokemonImage${i}" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}">
            </div>
            <div class="type-container" id="card${i}"></div>
        </div>
    </div>`;
}

function renderTypes(type) {
    return `
    <img class="icon ${type}" src="icons/${type}.svg"></img>`;
}

function renderBaseStats(hp, attack, defense, specialAttack, specialDefense, speed) {
    return `
    <div class="baseStatsContainer">
        <div class="bs">
            <span style="width:30%">HP</span>
            <div class="graph">
                <div class="bg1 bg" style="width: ${hp}%">${hp}</div> 
            </div>
        </div>
        <div class="bs">
            <span style="width:30%">Attack</span>
            <div class="graph">
                <div class="bg2 bg" style="width: ${attack}%">${attack}</div> 
            </div>
        </div>
        <div class="bs">
            <span style="width:30%">Defense</span>
            <div class="graph">
                <div class="bg3 bg" style="width: ${defense}%">${defense}</div> 
            </div>
        </div>
        <div class="bs">
            <span style="width:30%">Special Attack</span>
            <div class="graph">
                <div class="bg4 bg" style="width: ${specialAttack}%">${specialAttack}</div> 
            </div>
        </div>
        <div class="bs">
            <span style="width:30%">Special Defense</span>
            <div class="graph">
                <div class="bg5 bg" style="width: ${specialDefense}%">${specialDefense}</div> 
            </div>
        </div>
        <div class="bs">
            <span style="width:30%">Speed</span>
            <div class="graph">
                <div class="bg6 bg" style="width: ${speed}%">${speed}</div> 
            </div>
        </div>
    </div>    
    `;
}

function renderAbilities(ability) {
    return `
    <div id="${ability}" class="ability">${ability}</div>
    `;
}

function renderSearch(type, currentPokemon, index) {
    return `
    <div class="pokedex ${type}">
        <h1 class="pokemonName">${currentPokemon['name']}</h1>
        <div class="id"># ${currentPokemon['id']}</div>
        <div class="card"> 
            <div class="card-img">               
                <img onclick="openCard(${index})"class="hover" id="pokemonImage${index}" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}">
            </div>
            <div class="type-container" id="card${index}"></div>
        </div>
    </div>`;
}
