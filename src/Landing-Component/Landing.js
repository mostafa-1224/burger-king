import React from 'react'
import {Link} from 'react-router-dom';
import './Landing.css';

import logo from '../images/logo.png';
import moto from '../images/moto.png';
import image from '../images/Image.png';


function Landing() {
    return (
        <div>
            
    <section id="group1">
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <div className="address">
                    <img src={moto} alt="" />
                    <p>Express Delivery +1 234 567 890</p>
                </div>
                <ul>

                    <li><Link to="/contact-us"><a href="">home</a></Link></li>
                    <li><Link to="/contact-us"><a href="">menu</a></Link></li>
                    <li><Link to="/contact-us"><a href="">our story</a></Link></li>
                    <li><Link to="/contact-us"><a href="">contact us</a></Link></li>
                </ul>
            </div>
        </nav>
        <div className="landing-content">
            <div className="landing-text">
                <p>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
                <h1>BURGER</h1>
                <h2>WEEK</h2>
            </div>
            <div className="landing-image"> 
                <img src={image} alt="" />
            </div>
        </div>
    </section>
        </div>
    )
}

export default Landing;
