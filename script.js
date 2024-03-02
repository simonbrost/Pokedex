// Array für die Pokemon-URLs erstellen
let pokeUrl = [];

// Array für die Pokemon-Namen erstellen
let pokeNames = [];

// Array für die Pokemon-Bilder erstellen
let pokeImages = [];

// Array für die Pokemon-Typen erstellen
let pokeTypes = [];

function init() {
    fetchPokemonData()
};
// Funktion zum Abrufen der Daten von der API
async function fetchPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    
    if (!response.ok) {
      throw new Error('Fehler beim Abrufen der Daten von der API');
    }
    
    const data = await response.json();
    
    // Die URL jedes Pokemons der API zum Array hinzufügen
    data.results.forEach((pokemon) => {
      pokeUrl.push(pokemon.url);
    });
    
    // Die Namen der Pokemon aus den URLs abrufen und zum Array hinzufügen
    await Promise.all(pokeUrl.map(async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Daten von der API');
      }
      const pokemonData = await response.json();
      pokeNames.push(pokemonData.name);
      // Das Bild des Pokemons aus den Daten extrahieren und zum Array hinzufügen
      pokeImages.push(pokemonData.sprites.other['official-artwork'].front_default);
      
      // Die Typen des Pokemons aus den Daten extrahieren und zum Array hinzufügen
      const types = pokemonData.types.map(type => type.type.name);
      pokeTypes.push(types);
    }));
    
    // Das Array mit den Pokemon-Namen anzeigen
    console.log(pokeNames);
    
    // Das Array mit den Pokemon-Bildern anzeigen
    console.log(pokeImages);
    
    // Das Array mit den Pokemon-Typen anzeigen
    console.log(pokeTypes);
  } catch (error) {
    console.error(error);
  }

    loadCards();
}


function loadCards() {
  for (let i = 0; i < pokeNames.length; i++) {
    const pokename = pokeNames[i];
    const pokeimg = pokeImages[i];
    const primaryTypes = pokeTypes[i].slice(0, 1); // Das erste Element ist der Haupttyp
    const secondaryTypes = pokeTypes[i].slice(1); // Alle folgenden sind sekundäre Typen

    // Farbe für jeden Typ definieren
    const typeColors = {
      "fire": "#be282879",
      "water": "#328bdd79",
      "normal": "#becbd679",
      "bug": "#87ffaf8f",
      "grass": "#9bff878f",
      // Weitere Typen und Farben hinzufügen
    };


    // Hintergrundfarben für den Haupttyp ermitteln
    const backgroundColor = primaryTypes.map(type => typeColors[type] || "gray").join(", ");

    document.getElementById('content').innerHTML += `
    <div class="card mb-3" id="pokeCard" style="max-width: 540px;">
      <div class="row g-0" id="card" style="background-color: ${backgroundColor};">
        <div class="col-md-4">
          <img src="${pokeimg}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${pokename}</h5>
            <div class="card-text">
              <div class="typeBadge">${primaryTypes.join(", ")}</div>
              <div class="typeBadge">${secondaryTypes.join(", ")}</div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    `;
  }
}





    // Farbe für jeden Typ definieren
    const typeColors = {
      "fire": "#be282879",
      "water": "#328bdd79",
      "normal": "#becbd679",
      "bug": "#87ffaf8f",
      "grass": "#9bff878f",
      // Weitere Typen und Farben hinzufügen
    };
