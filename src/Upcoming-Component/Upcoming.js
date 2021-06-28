import React from 'react'

import './Upcoming.css';
import foodImage from '../images/Food Image.jpg'
function Upcoming() {
    return (
        <div>
            
        <div class="container">
            <div class="up-coming">
                <div class="upcoming-text">
                    <p>discover</p>
                    <h2>upcoming events</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
                        mollitia quod molestiae temporibus, quis beatae delectus dicta eius, 
                        cumque rerum ex et dolore itaque odio doloribus numquam 
                        assumenda. Incidunt, provident?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
                        mollitia quod molestiae temporibus, quis beatae delectus dicta eius, 
                        cumque rerum ex et dolore itaque odio doloribus numquam 
                        assumenda. Incidunt, provident?
                    </p>
                </div>
                <div class='upcoming-img'>
                    <img src={foodImage} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Upcoming
