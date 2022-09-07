import React from "react";

export default function Pokemon() {
  return (
    <div>
      <h1>Hola soy pokémon</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const traerPoKEMON = (numero) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
      .then((response) => response.json())
      .then((data) => data);
  };

  let arrayPokemon = [];

  for (let index = 1; index <= 50; index++) {
    let data = await traerPoKEMON(index);
    arrayPokemon.push(data);
  }

  let pokemonListo = arrayPokemon.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };
  });

  return {
    props: {
      pokemonListo,
    },
  };
}