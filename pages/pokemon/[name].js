import React from "react";

export default function Pokemon({ pokemonName, pokemonImage }) {
  return (
    <div>
      <h1>{pokemonName.name}</h1>
      <img src={pokemonImage.image} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  const { image } = context.query;

  const resName = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonName = await resName.json();

  const resImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${image}`);
  const pokemonImage = await resImage.json();

  return {
    props: {
      pokemonName,
      pokemonImage,
    },
  };
}
