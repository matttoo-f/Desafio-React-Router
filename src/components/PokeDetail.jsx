import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import '../styles/PokeDetail.css'


const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemonDetail();
  }, [id]);


  if (!pokemon) {
    return <p>Cargando...</p>;
  }

  const Volver = () => {
    navigate('/pokemones/')
  }

  return (

    <div className="container-card">

      <div className="card">
        <div>
          
          <img className="poke-img" src={pokemon.sprites.front_default} alt={pokemon.name} />

        </div>
        <div className="detail">

          <h1>{pokemon.name}</h1>
          <p>ID PokeDex: {pokemon.id}</p>
          <ul>
            <li>{pokemon.stats[0].stat.name} : {pokemon.stats[0].base_stat}</li>
            <li>{pokemon.stats[1].stat.name} : {pokemon.stats[1].base_stat}</li>
            <li>{pokemon.stats[2].stat.name} : {pokemon.stats[2].base_stat}</li>
            <li>{pokemon.stats[3].stat.name} : {pokemon.stats[3].base_stat}</li>
            <li>{pokemon.stats[4].stat.name} : {pokemon.stats[4].base_stat}</li>
            <li>{pokemon.stats[5].stat.name} : {pokemon.stats[5].base_stat}</li>
          </ul>
          <p className="tipo">Tipo: {pokemon.types[0].type.name}</p>
          
        </div>
      </div>
      <button onClick={Volver}>Volver</button>
    </div>
 
  );
};

export default PokemonDetail;
