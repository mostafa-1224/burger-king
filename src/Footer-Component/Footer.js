import React from 'react'

import './Footer.css'
import whiteLogo from "../images/white logo.png";
import location from "../images/icons/Location.png";
import email from "../images/icons/Email.png";
import instagram from "../images/icons/Instagram.png";
import facebook from "../images/icons/Facebook.png";
import twitter from "../images/icons/Twitter.png";
import whatsapp from "../images/icons/WhatsApp.png";



function Footer() {
    return (
        <div>
            <section id='footer-section'>
        <div class="container">
            <div class="footer">
                <img src={whiteLogo} alt="" />

                <div class="content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                         Voluptas nesciunt esse molestias nihil, laboriosam, odit,
                          recusandae assumenda similique quo harum fuga dicta ipsam
                           quasi temporibus at aliquam doloremque quia ad?
                    </p>
                    <div class="contact">
                        <div>
                            <img src={location} alt="" />
                            <p>MAIN ROAD, BUILDING NAME, COUNTRY</p>
                            
                        </div>
                        <div>
                            <img src={email} alt="" />
                            <p>INFO@COMPANYNAME.COM</p>
                            
                        </div>
                    </div>
                </div>
                <div class="social-media">
                    <p class="social-p"> &copy;COMPANY NAME 2020. ALL RIGHTS RESERVED</p>
                    <div class="icons">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={whatsapp} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    </section>
 
        </div>
    )
}

export default Footer
