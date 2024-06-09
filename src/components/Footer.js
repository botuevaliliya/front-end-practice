import React from 'react';
import logo from '../images/small_logo.png'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant focused on traditional recipies served with a modern twist.</p> 
                </div>
                <div>
                    <h3>Important links</h3>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/'>About</a>
                        </li>
                        <li>
                            <a href='/'>Menu</a>
                        </li>
                        <li>
                            <a href='/'>Reservations</a>
                        </li>
                    </ul>
                </div>
                <div>
                <h3>Contact</h3>
                    <ul>
                        <li>
                            Address: <br/> Moscow, Russia
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;