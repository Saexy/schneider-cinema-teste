import React, { useEffect } from 'react';

import $ from 'jquery';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slide1 from '../../assets/images/slide_1.png'
import Slide2 from '../../assets/images/slide_2.png'
import Slide3 from '../../assets/images/slide_3.png'
import Slide4 from '../../assets/images/slide_4.png'

import './style.css'

const Home = () => {

    $(() => {
        const slideshow = () => {
            $(".slide").css("display", "none")
            myIndex++
            if (myIndex > $(".slide").length) {
                myIndex = 1
            }    
            $(".slide").eq(myIndex - 1).css("display", "block"); 
            setTimeout(slideshow, 9000)
            console.log("TESTE")
        }

        let myIndex = 0;
        slideshow();
    })

    return (
        <div className="home">
            <Navbar>Home</Navbar>
            <div className="slideshow">
                <div className='title'>
                    <p>IP’s that our moms don’t have to cover their eyes to watch</p>
                </div>
                <img className="slide" src={Slide1} />
                <img className="slide" src={Slide2} />
                <img className="slide" src={Slide3} />
                <img className="slide" src={Slide4} />
            </div>
            <Footer />
        </div>
    )
}
 
export default Home;