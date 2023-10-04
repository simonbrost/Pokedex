
async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/gengar';
    let response = await fetch(url);
    let currentPokemon = await response.json();
    console.log('Loaded pokemon', currentPokemon);

    renderPokemonInfo(currentPokemon);
    renderAboutTable(currentPokemon);
}

function renderPokemonInfo(currentPokemon) {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
}
function renderAboutTable(currentPokemon) {
    document.getElementById('aboutTable').innerHTML = ``;
        let species = currentPokemon['types']['0']['type'];
        let height  = currentPokemon['types']['0']['type'];
        let weight  = currentPokemon['types']['0']['type'];
        let abilities = currentPokemon['types']['0']['type'];

        document.getElementById('aboutTable').innerHTML += `
    <table class="table">
                <tbody>
                  <tr>
                    <td>Species</td>
                    <td>${species}</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>${height}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>${weight}</td>
                  </tr>
                  <tr>
                    <td>Abilities</td>
                    <td>${abilities}</td>
                  </tr>
                </tbody>
            </table>
    `;
}
