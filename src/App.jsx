import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import PokeDetail from './components/PokeDetail'

function App() {

  return (
    <>
      <NavBar/>

      <Routes>

          <Route path= '/' element = {<Home/>}/>
          <Route path= '/pokemones' element = {<Pokemones/>}/>
          <Route path= '/pokemones/:id/' element = {<PokeDetail/>}/>



      </Routes>
    </>
  )
}

export default App
