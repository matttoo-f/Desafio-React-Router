import { useContext, useState } from "react"
import { MyContext } from "../context/MyContext"
import { useNavigate } from "react-router-dom"

import '../styles/Pokemones.css'

const Pokemones = () => {

    const {PokeData, setPokeData} = useContext(MyContext)
    const Navigate = useNavigate()
    const [selectedPoke, setSelectedPoke] = useState('')

    if (!PokeData) {
        return <p>Cargando...</p>;
      }

    const PokeSelect = (e)=> {
        setSelectedPoke(e.target.value)
    }  

    const handleShowDetails = () => {
        if (selectedPoke) {
          const pokemonId = selectedPoke.split("/").slice(-2, -1).pop();
          Navigate(`/pokemones/${pokemonId}/`);
        }
      };

    return (
        <>
        <div className="poke-container">
            <h1>Selecciona un pokemon</h1>
            <select name="" id="" onChange={PokeSelect}>
                <option value="pokemones">Pokemones</option>
                {PokeData.map((pokemon, index) => {
                    return (
                        <option key={index} value={pokemon.url}> {pokemon.name} </option>
                    )
                })}
            </select>
            <button onClick={handleShowDetails}>Ver detalles</button>
        </div>
        </>
    )
}
export default Pokemones