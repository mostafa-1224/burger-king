import React from 'react'

import './Offers.css'
import Offer1 from '../images/offer1.png';
import Offer2 from '../images/offer2.png';

function Offers() {
    return (
        <div>
            <div class="offers">
            <div class="offer">
                <img class="offer-img" src={Offer1} alt="" />
                <h2 class="offer-h2">Lorem Ipsum Dolor</h2>
                <p class="offer-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dolore.</p>
                <button class="offer-btn">order now</button>
            </div>
            <div class="offer">
                <img class="offer-img" src={Offer2} alt="" />
                <h2 class="offer-h2">Lorem Ipsum Dolor</h2>
                <p class="offer-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dolore.</p>
                <button class="offer-btn">order now</button>
            </div>
            <div class="offer">
                <img class="offer-img" src={Offer1} alt="" />
                <h2 class="offer-h2">Lorem Ipsum Dolor</h2>
                <p class="offer-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, dolore.</p>
                <button class="offer-btn">order now</button>
            </div>
        </div>
        </div>
    )
}

export default Offers
