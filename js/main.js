function renderPokemons(pokemons) {
    const container = document.getElementById("pokemon-list");
    container.innerHTML = ""; // Avvalgi natijalarni tozalash

    pokemons.forEach((pokemon, index) => {
        const card = document.createElement("div");
        card.className = "pokemon-card";
        card.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <p>${pokemon.num} - ${pokemon.name}</p>`;
            card.addEventListener("click", () => showDetails(index));
            container.appendChild(card);
        });
    }

    function showDetails(index) {
        const pokemon = pokemons[index];
        const modal = document.getElementById("pokemon-modal");
        const modalDetails = document.getElementById("modal-details");
        modalDetails.innerHTML = `
            <h2>${pokemon.name} (#${pokemon.num})</h2>
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <p><strong>Type:</strong> ${pokemon.type.join(", ")}</p>
            <p><strong>Height:</strong> ${pokemon.height}</p>
            <p><strong>Weight:</strong> ${pokemon.weight}</p>
            <p><strong>Candy:</strong> ${pokemon.candy}</p>
            <p><strong>Candy Count:</strong> ${pokemon.candy_count}</p>
            <p><strong>Egg Distance:</strong> ${pokemon.egg}</p>
            <p><strong>Spawn Chance:</strong> ${pokemon.spawn_chance}</p>
            <p><strong>Average Spawns:</strong> ${pokemon.avg_spawns}</p>
            <p><strong>Spawn Time:</strong> ${pokemon.spawn_time}</p>
            <p><strong>Multipliers:</strong> ${pokemon.multipliers ? pokemon.multipliers.join(", ") : ""}</p>
            <p><strong>Weaknesses:</strong> ${pokemon.weaknesses.join(", ")}</p>
        `;
        modal.style.display = "flex";
    }

    function searchPokemon(event) {
        const query = event.target.value.toLowerCase();
        const filteredPokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query) || pokemon.num.includes(query)
        );
        renderPokemons(filteredPokemons);
    }

    document.getElementById("search-bar").addEventListener("input", searchPokemon);

    document.getElementById("close-modal").addEventListener("click", () => {
        document.getElementById("pokemon-modal").style.display = "none";
    });

    renderPokemons(pokemons); function renderPokemons(pokemons) {
        const container = document.getElementById("pokemon-list");
        container.innerHTML = "";

        pokemons.forEach((pokemon, index) => {
            const card = document.createElement("div");
            card.className = "pokemon-card";
            card.innerHTML = `
                <img src="${pokemon.img}" alt="${pokemon.name}">
                <p>${pokemon.num} - ${pokemon.name}</p>`;
                card.addEventListener("click", () => showDetails(index));
                container.appendChild(card);
            });
        }

    function showDetails(index) {
        const pokemon = pokemons[index];
        const modal = document.getElementById("pokemon-modal");
        const modalDetails = document.getElementById("modal-details");

        modalDetails.innerHTML = `
                <h2>${pokemon.name} (#${pokemon.num})</h2>
                <img src="${pokemon.img}" alt="${pokemon.name}">
                <p><strong>Type:</strong> ${pokemon.type.join(", ")}</p>
                <p><strong>Height:</strong> ${pokemon.height}</p>
                <p><strong>Weight:</strong> ${pokemon.weight}</p>
                <p><strong>Candy:</strong> ${pokemon.candy}</p>
                <p><strong>Candy Count:</strong> ${pokemon.candy_count}</p>
                <p><strong>Egg Distance:</strong> ${pokemon.egg}</p>
                <p><strong>Spawn Chance:</strong> ${pokemon.spawn_chance}</p>
                <p><strong>Average Spawns:</strong> ${pokemon.avg_spawns}</p>
                <p><strong>Spawn Time:</strong> ${pokemon.spawn_time}</p>
                <p><strong>Multipliers:</strong> ${pokemon.multipliers ? pokemon.multipliers.join(", ") : ""}</p>
                <p><strong>Weaknesses:</strong> ${pokemon.weaknesses.join(", ")}</p>
            `;

        modal.style.display = "flex";
}

function searchPokemon(event) {
    const query = event.target.value.toLowerCase();
    const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(query) || pokemon.num.includes(query)
);
    renderPokemons(filteredPokemons);
}

document.getElementById("search-bar").addEventListener("input", searchPokemon);
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("pokemon-modal").style.display = "none";
});

renderPokemons(pokemons);