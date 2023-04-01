import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



const PokeCard = ({url}) => {

    const [detail, setDetail] = useState({})

    useEffect( () => {
        axios
         .get(url)
         .then(resp => {
            setDetail(resp.data)})
         .catch(error => console.error(error))
    }, [url])
  
    
    return (
        <div>


            {
            <div className="Pokedex">
                <h2>{detail.name}</h2>
                <ul>
                    {
                    detail.types?.map( (detail, Index) => (
                        <li key={Index}><span>{detail?.type.name}</span></li>
                    ))   
                    }
                </ul>
                <h2>hp:<span>{detail.stats?.[0].base_stat}</span></h2>
                <h2>Attack:<span>{detail.stats?.[1].base_stat}</span></h2>
                <h2>Defense:<span>{detail.stats?.[2].base_stat}</span></h2>
                <h2>Speed:<span>{detail.stats?.[5].base_stat}</span></h2>
                <img src={detail.sprites?.other?.home.front_default} alt="" />

            </div>

          
            }

            
          

            
        </div>
    );
};

export default PokeCard;