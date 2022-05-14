import React from 'react';

import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import About1 from '../../assets/images/about_1.png'
import About2 from '../../assets/images/about_2.png'
import Footer from '../../components/Footer'

import './style.css'

const About = () => {

    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate(`/team`)
    }

    return (
        <div className="about">
            <Navbar>About</Navbar>
            <div className="section left">
                <div className='image'>
                    <img src={About1} alt=""/>
                </div>
                <div className='text'>
                    <p>WE acquire, develop, and produce content & IP’s that our moms don’t have to cover their eyes to watch.</p>
                </div>
            </div>
            <div className='divider'>OUR MISSION: INSPIRE, EDUCATE & ELEVATE.</div>
            <div className="section right">
                <div className='image'>
                    <img src={About2} alt=""/>
                </div>
                <div className='text'>
                    <p>Schneider Cinema is on a mission to become a powerhouse on uplifting content worldwide and impact the lives of 1 billion people by 2030.</p>
                    <a className='learn' onClick={(e) => handleLearnMore()}>≫ LEARN MORE</a>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
 
export default About;