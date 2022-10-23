import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';






const Home = () => {
    const [letterClass, setLetter] = useState('text-animate')
    const nameArray = ['N','i','z','a','r',' ','A','l','a','y','d','r','u','s']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                
                Nizar Alaydrus
                <br />
                web developer
                </h1>
                <h2>
                    Frontend Developer / JavaScript
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>

    );
}







export default Home;