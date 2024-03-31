import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext()

export const MyContextProvider = ({children}) => {

    const Navigate = useNavigate()
    const [PokeData, setPokeData] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            try {
              const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
              if (!response.ok) {
                throw new Error('Network response was not ok.');
              }
              const data = await response.json();

              setPokeData(data.results);

            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData()
          

    }, [])

    console.log(PokeData)


    return(
        <MyContext.Provider value={{PokeData, setPokeData}}>

            {children}

        </MyContext.Provider>
    )
}
export default MyContextProvider