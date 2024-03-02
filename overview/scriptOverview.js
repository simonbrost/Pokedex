let url = 'https://pokeapi.co/api/v2/pokemon';
let urlOfPokemon = [];
let pokeNames = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
let pokemonImages = []
let pokemonInfos = []

async function init(url) {
  let response = await fetch(url);
  let urlAsJson = await response.json();

  let resultsFromUrl = urlAsJson['results'];
  console.log(urlAsJson);

  for (let i = 0; i < pokeNames.length; i++) {
    const pokename = resultsFromUrl[pokeNames[i]]['name'];
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

// next problem: wie bekomme ich bild und info in die jeweilige card. ist nämlich nicht unter dem selben link der API wie der name allein
//junus sagt im ersten video irgendwas davon dass man die api dynamisch kriegen muss bzw. denletzten teil des links wo der name des pokemon steht


