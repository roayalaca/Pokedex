import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const PokemonCard = () => {

    const { id } = useParams()
    const [number, setNumber] = useState({})

    useEffect( () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then( resp => {setNumber(resp.data)
            })
            .catch(error => console.error(error))
    }, [id])
    return (
        <div className="card">
            <div className="info">
                <div className="pokename">
                    <h1>{number.name}</h1>
                    <h1>{number.id}</h1>
                    <h1>{number.height}</h1>
                    <h1>{number.weight}</h1>
                    <img src={number.sprites?.front_default} alt="" />
                </div>

                <div className="type">
                    <ul>
                        {
                        number.types?.map( (number, Index) => (
                            <li key={Index}>{number?.type.name}</li>
                        ))   
                        }
                    </ul>
                </div>

                <div className="abilities">
                    <ul>
                        {
                        number.abilities?.map( (number, Index) => (
                            <li key={Index}>{number?.ability.name}</li>
                        ))   
                        }
                    </ul>
                </div>


            </div>

            <div className="movements">
                    <ul>
                        {
                        number.moves?.map( (number, Index) => (
                            <li key={Index}>{number?.move.name}</li>
                        ))   
                        }
                    </ul>
             </div>
            
           
        </div>
    );
};

export default PokemonCard;