let currentPokemon;
let allPokemons;
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
    fillOutCard(currentPokemon, index);
}

function fillOutCard(currentPokemon, index) {
    document.getElementById('class-type').classList.remove('bug', 'dark', 'dragon', 'electric', 'fire', 'fairy', 'fighting', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water');
    document.getElementById('class-type').classList.add(`${currentPokemon['types'][0]['type']['name']}`)
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('id').innerHTML = `# ${currentPokemon['id']}`;
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('details').classList.remove('d-none');
    baseStats(currentPokemon);
    abilities(currentPokemon);
    showButtons(index);
}

function showButtons(index) {
    previousIndex = index - 1;
    nextIndex = index + 1;
    if (previousIndex >= 0) {
        document.getElementById('left-btn').innerHTML = `<img onclick="openCard(${previousIndex})" src="icons/left-arrow.png">`;
    } else {
        document.getElementById('left-btn').innerHTML = `<img src="icons/left-arrow.svg" style="opacity:0">`;
    }
    if (nextIndex <= 1281) {
        document.getElementById('right-btn').innerHTML = `<img onclick="openCard(${nextIndex})" src="icons/right-arrow.png" >`;
    } else {
        document.getElementById('right-btn').innerHTML = `<img src="icons/right-arrow.svg"; style="opacity:0">`;
    }
}

function baseStats(currentPokemon) {
    hp = currentPokemon['stats'][0]['base_stat'];
    attack = currentPokemon['stats'][1]['base_stat'];
    defense = currentPokemon['stats'][2]['base_stat'];
    specialAttack = currentPokemon['stats'][3]['base_stat'];
    specialDefense = currentPokemon['stats'][4]['base_stat'];
    speed = currentPokemon['stats'][5]['base_stat'];
    document.getElementById('baseStats').innerHTML =
        renderBaseStats(hp, attack, defense, specialAttack, specialDefense, speed);
}

function abilities(currentPokemon) {
    document.getElementById('abilities').innerHTML = '';
    for (let count = 0; count < currentPokemon['abilities'].length; count++) {
        ability = currentPokemon['abilities'][count]['ability']['name'];
        document.getElementById('abilities').innerHTML +=
            renderAbilities(ability);
        document.getElementById(`${ability}`).classList.add(`${currentPokemon['types'][0]['type']['name']}`);
    }
}

function types(currentPokemon, i) {
    for (let count = 0; count < currentPokemon['types'].length; count++) {
        type = currentPokemon['types'][count]['type']['name'];
        document.getElementById(`card${i}`).innerHTML +=
            renderTypes(type);
    }
}

function closeCard() {
    document.getElementById('details').classList.add('d-none');
}

function stopPropagation(event) {
    event.stopPropagation();
}

function startSearch() {
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('container').innerHTML = '';
    let search = document.getElementById('search').value; /*nimmtText aus Input Feld*/
    search = search.toLowerCase();
    if (search.length < 1){
        resetSearch();
    }else{
        searchLoop(search)
    }    
}

async function searchLoop(search){
    for (index = 0; index < 1281; index++) {
        if (allPokemons['results'][index]['name'].toLowerCase().includes(search)) {
            let url2 = `https://pokeapi.co/api/v2/pokemon/${allPokemons['results'][index]['name']}`;
            let response2 = await fetch(url2);
            currentPokemon = await response2.json();
            type = currentPokemon['types'][0]['type']['name'];
            document.getElementById('container').innerHTML +=
                renderSearch(type, currentPokemon, index)
        }
    }
}

function resetSearch(){
    i=0;
    j=20;
    document.getElementById('container').innerHTML ='';
    loadPokemon();
    document.getElementById('next-btn').classList.remove('d-none');
    document.getElementById('search').value = '';
}

function clickPress(event) {
    if (event.keyCode == 13) {
      startSearch();
    }
  }