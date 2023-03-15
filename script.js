let currentPokemon;
let i = 0;
let j = 20;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    let response = await fetch(url);
    allPokemons = await response.json();
    next20();
}

async function next20() {
    for (i; i < j; i++) {
        let url2 = `https://pokeapi.co/api/v2/pokemon/${allPokemons['results'][i]['name']}`;
        let response2 = await fetch(url2);
        currentPokemon = await response2.json();
        type = currentPokemon['types'][0]['type']['name'];
        document.getElementById('container').innerHTML +=
            renderCards(type, currentPokemon, i)
        types(currentPokemon, i);
    }
    j = i + 20;
    if (j > 1281) {
        j = 1281;
        document.getElementById('next-btn').classList.add('d-none');
    }
}

async function openCard(index) {
    let url2 = `https://pokeapi.co/api/v2/pokemon/${allPokemons['results'][index]['name']}`;
    let response2 = await fetch(url2);
    currentPokemon = await response2.json();
    baseStats(currentPokemon);
    abilities(currentPokemon);
}

function types(currentPokemon, i) {
    for (let count = 0; count < currentPokemon['types'].length; count++) {
        type = currentPokemon['types'][count]['type']['name'];
        document.getElementById(`card${i}`).innerHTML +=
            renderTypes(type);
    }
}

function baseStats(currentPokemon) {
    hp = currentPokemon['stats'][0]['base_stat'];
    attack = currentPokemon['stats'][1]['base_stat'];
    defense = currentPokemon['stats'][2]['base_stat'];
    specialAttack = currentPokemon['stats'][3]['base_stat'];
    specialDefense = currentPokemon['stats'][4]['base_stat'];
    speed = currentPokemon['stats'][5]['base_stat'];
}

function abilities(currentPokemon) {
    for (let count = 0; count < currentPokemon['abilities'].length; count++) {
        ability = currentPokemon['abilities'][count]['ability']['name'];
        console.log(currentPokemon['name']);
        console.log(ability);
    }
}