import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <ul className='footer-list'>
                <li><h2> ABOUT</h2></li>
                <li><p><Link to='/contact'>Contact us</Link></p></li>
                <li><p><Link to='/about'>About us</Link></p></li>
            </ul>
            <ul className='footer-list'>
                <li><h2>HELP</h2></li>
                <li><p>Payments</p></li>
                <li><p>Shipping</p></li>
                <li><p>Cancellation & Returns</p></li>
                <li><p>FAQs</p></li>
            </ul>
            <ul className='footer-list'>
                <li><h2>SOCIALS</h2></li>
                <li>
                    <p>
                        <Link to="https://www.linkedin.com" rel="noreferrer" target="_blank">
                            Linkedin
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="https://github.com">
                            Github
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link href="https://www.instagram.com" rel="noreferrer" target="_blank">
                            Instagram
                        </Link>
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Footer