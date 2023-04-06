
import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import PokeCard from './pages/PokeCard'
import PokemonCard from './pages/PokemonCard'
import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import MainLayout from './components/MainLayout'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useSelector } from 'react-redux'
import Pokedex from './pages/Pokedex'




function App() {
  const[pokemon, setPokemon] = useState([])
  const [pages, setPages] = useState({ next: null, prev: null })
  const[currentPage, setCurrentPage] = useState(1);
  const[postsPerPage] = useState(5)
  const [type, setType] = useState([])


  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemon.slice(indexOfFirstPost, indexOfLastPost);


  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect( () => {
      axios
          .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281`)
          .then(resp => {
            setPokemon(resp.data.results)
            setPages({ next: resp.data.next, prev: resp.data.previous })
          })
          .catch(error => console.error(error))
  }, [])

 

  useEffect( () => {
    axios
        .get(`https://pokeapi.co/api/v2/type/`)
        .then(resp => setType(resp.data.results))
        .catch(error => console.error(error))
  }, [])





  //Number of pages in arrays (Pagination )
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(pokemon.length / postsPerPage); i++) {
      pageNumbers.push(i);
  }


  //Filtering
    //Dua con el estado inicial del select

  const [typeSelected, setTypeSelected] = useState("") //Duda con el estado inicial del select

  
          

 
  return (
    <HashRouter>
      <div className="App">

       
        <Routes>
          <Route
          path='/'
          element={<Home/>}
          />

          
          
          

          <Route
          element={<MainLayout/>}
          >
            <Route
            path='/pokedex/:id'
            element={ <PokemonCard/> }
            />
          </Route>

          <Route
          element={<ProtectedRoutes/>}
          >
              <Route
              path='/pokedex'
              element={<Pokedex/>}
              />


          </Route>

        </Routes>


      </div>
    </HashRouter>
    
  )
}

export default App
