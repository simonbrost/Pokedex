
async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/gengar';
    let response = await fetch(url);
    let currentPokemon = await response.json();
    console.log(currentPokemon);

    renderPokemonInfo(currentPokemon);
}

function renderPokemonInfo(currentPokemon) {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('species').innerHTML = currentPokemon['types']['0']['type'];
    document.getElementById('height').innerHTML = currentPokemon['types']['0']['type'];
    document.getElementById('weight').innerHTML = currentPokemon['types']['0']['type'];
    document.getElementById('abilities').innerHTML = currentPokemon['types']['0']['type'];
}
