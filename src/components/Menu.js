import React from 'react'
import '../styles/Menu.css'
import { Link } from 'react-router-dom'
import togglemenu from './Navbar'

export default function Menu() {

    return (
        <div className='menu-frame'>
            <ul className='menu-ul'>
                <li>
                    <Link to='/projects' onClick={togglemenu}>✷ Projects</Link>
                </li>
                <li>
                    <Link>✷ Services</Link>
                </li>
                <li>
                    <Link>✷ Contact</Link>
                </li>
            </ul>
        </div>
    )
}
