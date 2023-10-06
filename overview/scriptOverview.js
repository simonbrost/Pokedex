let pokemon = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

async function init() {
  let url = 'https://pokeapi.co/api/v2/pokemon';
  let response = await fetch(url);
  let responseAsJson = await response.json();

  let onePokemon = responseAsJson['results'];
  console.log(responseAsJson['results']);

  for (let i = 0; i < pokemon.length; i++) {
    const pokename = onePokemon[pokemon[i]]['name'];
    // const pokeimg = onePokemon[pokemon[i]]['name'];
    // const pokeinfo = onePokemon[pokemon[i]]['name'];

    document.getElementById('content').innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${pokename}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> 
        `;
  }
}

