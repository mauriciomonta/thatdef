import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import Menu from './Menu'
import { Fade as Hamburger } from 'hamburger-react'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const togglemenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='nav-frame'>
            <div className='nav-content'>
                <Link to='/'>
                    <img src='https://imgur.com/yTYx0dQ.png' alt='DEF Logo' width={120} className='nav-logo' />
                </Link>
                <ul className='nav-ul'>
                    <li>
                        <Link>Projects</Link>
                    </li>
                    <li>
                        <Link>Services</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                </ul>
                <div className='nav-ham' onClick={togglemenu}>
                    <Hamburger />
                    {isOpen ? <Menu /> : null}
                </div>
            </div>
        </div>
    )
}
