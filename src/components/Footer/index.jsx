import React from 'react';

import "./style.css"

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className='texts'>
                <p className='title'>CONTACT</p>
                <p className='text'><a href="www.schneidercinema.com">Web</a></p>
                <p className='text'><a href="https://www.facebook.com/schneidercinema">Facebook</a></p>
                <p className='text'><a href="https://www.instagram.com/schneidercinema/?igshid=YmMyMTA2M2Y=">Instagram</a></p>
                <p className='email'>Email: contact@schneidercinema.com</p>
            </div>
        </div>
    )
}
 
export default Footer;