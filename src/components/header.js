import React from 'react'
import { Link } from 'gatsby'
import * as hS from '../styles/header.module.css'

const Header = () => {
    return (
        <header>
            <ul className={hS.list}>
                <li className={hS.item}><Link className={hS.link} to='/'>Home</Link></li>
                <li className={hS.item}><Link className={hS.link} to='/work'>Works</Link></li>
                <li className={hS.item}><Link className={hS.link} to='/blog'>Blog</Link></li>
                <li className={hS.item}><Link className={hS.link} to='/contact'>Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header