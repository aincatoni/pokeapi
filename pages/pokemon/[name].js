import React from "react",
import HomeCss from "/pages";

export default function Pokemon({ pokemon }) {
  return (
    <div className={`${pokemon.types[0].type.name}`}>
      <h1>{pokemon.name}</h1>
      <h3>{pokemon.types[0].type.name}</h3>
      <img src={pokemon.sprites.back_default} alt="" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
};
