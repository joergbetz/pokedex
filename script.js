let currentPokemon;

async function loadPokemon(){
   

    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    let response = await fetch(url);
    allPokemons = await response.json();

    for (let i=0; i<20; i++){
        let url2 = `https://pokeapi.co/api/v2/pokemon/${allPokemons['results'][i]['name']}`;
        let response2 = await fetch(url2);
        currentPokemon = await response2.json();
        type = currentPokemon['types'][0]['type']['name'];
        console.log ('Loaded pokemon', currentPokemon);
        document.getElementById('container').innerHTML += 
        renderCards(type, currentPokemon, i)
    }

    
    /* renderPokemonInfo(); */

}

function renderPokemonInfo(){
    type = currentPokemon['types'][0]['type']['name'];
    console.log (type);
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('id').innerHTML = currentPokemon['id'];
    document.getElementById('pokedex').classList.add(`${type}`);
    document.getElementById('type').classList.add(`${type}`);
    document.getElementById('type').src = `icons/${type}.svg`;
}