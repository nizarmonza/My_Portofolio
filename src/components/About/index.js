import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'




const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15} />
                </h1>
                <p>I am a passionate, solution-oriented full-stack developer highly interested in learning new technologies and comfortable to work in diverse teams. I'm capable for building and designing a full stack website with an experience in JavaScript, ReactJS, Bootstrap, NodeJS, SQL, Python, FlaskSQL, REST APIs, and Git. I'm Interested in advancing my international career and leveraging my worldwide perspective for an employer looking to invest in their future.</p>
                <p>I am a part time triathlete that is actively competing in collegiate level. Currently sponsored by Strive Indonesia.</p>
                <p>To learn more about my projects and passions visit my GitHub profile at https://github.com/nizarmonza
                or email me at monza@wisc.edu</p>

            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#28A4D9"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>

    )

}

export default About;