
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Username from '../components/Username'


const Home = () => {
    
    const navigate = useNavigate()

    const redirect = () => navigate("/pokedex")
    return (
        <div className='Home'>
            <div className='title'>
                <img src="/public/pokedex.jpg" alt="" />
            </div>
            <div className='greeting'>
                <h1>Hello trainer!</h1>
            </div>
            <div className='name'>
                <h2>Give me your name to start</h2>
            </div>
            <Username/>
            <footer className='footer'>
               <div className='footer1'>
               hey
               </div>
               <div className='footer2'>
                hey1
                    <div className='cirle'>
                    C
                    </div>
               </div>
            </footer>
        </div>
    );
};

export default Home;