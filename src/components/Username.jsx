
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setNewName } from '../store/slices/username.slice';
import { useNavigate } from 'react-router-dom';

const username = () => {
    const name = useSelector( state => state.username )

    const dispatch = useDispatch()
    const [ value, setValue ] = useState("")
    const navigate = useNavigate()

    const changeName = () => {

        dispatch( setNewName(value) )
        navigate("/pokedex")
    }

    console.log(name)

    return (
        <div className='input'>
            <input 
            type="text" 
            value={ value }
            onChange= {e => setValue( e.target.value )}
            />
            <button onClick={changeName}>Start!</button>
        </div>
    );
};

export default username;