import React from 'react'

import './Form.css';
import burger from '../images/Burger.png';
import bottle from '../images/Bottle.png';
import plate from '../images/plate.png';

function Form() {
    return (
        <div>
            
    <section id='form-section'>
        <img src={burger} alt="" />
        <img src={bottle} alt="" />
        <img src={plate} alt="" />
        <div class="form-title">
            <p class="form-p">reservation</p>
            <h2 class="form-h2">Book Your Table</h2>
            <form class="form" >
                <input type="text" placeholder="NAME" />
                <input type="text" placeholder="EMAIL" />
                <input type="text" placeholder="DATE" />
                <input type="text" placeholder="TIME" />
                <input type="text" placeholder="PEPOLE" />
                <input type="button" value="FIND A TABLE" />
            </form>
        </div>
    </section>

        </div>
    )
}

export default Form
