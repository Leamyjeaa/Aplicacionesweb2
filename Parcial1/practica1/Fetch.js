fetch('https://pokeapi.co/api/v2/pokemon/100', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const pokemonid = data.id;
        console.log(`El id del pokémon es: ${pokemonid}`);
    })
    .catch(error => console.error('Ha ocurrido un error:', error));