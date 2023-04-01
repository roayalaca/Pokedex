
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Username from '../components/Username'


const Home = () => {
    
    const navigate = useNavigate()

    const redirect = () => navigate("/pokedex")
    return (
        <div className='greeting'>
          <h1>Hello trainer!</h1>
            <div className='name'>
                <h2>Give me your name to start</h2>
            </div>
            <Username/>
        </div>
    );
};

export default Home;