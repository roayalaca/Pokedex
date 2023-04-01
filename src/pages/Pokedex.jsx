import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import PokeCard from "./PokeCard";


const Pokedex = () => {

    const[pokemon, setPokemon] = useState([])
    const [pages, setPages] = useState({ next: null, prev: null })
    const[currentPage, setCurrentPage] = useState(1);
    const[postsPerPage] = useState(1281)
    const [option, setOption] = useState([])
    const[index, setIndex] = useState(null)
    const [typeSelected, setTypeSelected] = useState("AllPokemons") //Duda con el estado inicial del select
    const [type, setType] = useState([])
    const [detail, setDetail] = useState({})

    const [name, setName] = useState("")

    //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPokemons = pokemon.slice(indexOfFirstPost, indexOfLastPost);


  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect ( () => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281`)
    .then(resp => setPokemon(resp.data.results))
    .catch(error => console.error(error))

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
    
      const dos = useSelector( state => state.username )


    

    const filter = (url) => {
      axios
      .get(url)
      .then(resp => setPokemon(resp.data.pokemon))
    }

    const searchByPokemon = () => {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(resp => setPokemon(resp.data))
      .catch(error => console.error(error))
    }

   
      


    return (
        <div>

            <h1>Welcome {dos}, here you will be able to find your spirit Pokemon</h1>

              <input
              placeholder="Type a pokemon's name"
              value={name}
              onChange={ e => setName(e.target.value)}
              />
              <button onClick={searchByPokemon}>Search</button>
           

              <select
                id='types'
                onChange={(e) => filter(e.target.value)} //Para que el value de este select sea leído, le estoy atribuyendo el valor del select al estado typeSelected
                >
                  <option value="AllPokemons">All Pokemons</option>
                  {
                    type.map( type => (
                      <option key={type.url} value={type.url}>{type.name}</option>
                    ))
                  }
                  
              </select>

              <ul>
                <div className='pokemon-card'>

                {

                  currentPokemons?.map( pokemon => (
                      <Link key={pokemon.name} to = {`/pokedex/${pokemon.name}`} >
                        <PokeCard
                        url = { pokemon.pokemon ? pokemon.pokemon.url : pokemon.url }
                        setPokemon = { setPokemon }
                        />
                      </Link>
                  ))
                }


                </div>
              
                  <nav>
                    <ul className='pagination'>
                        {pageNumbers?.map(number => (
                            <li key={number} className='page-item'>
                                <a onClick={() => paginate(number)} href='#/pokedex' className='page-link'>
                                    {number}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav> 
            </ul>
        
            

              
            
        </div>
    );
};

export default Pokedex;