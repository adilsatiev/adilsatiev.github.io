import React from 'react'
import { Link } from 'gatsby'
import * as hS from '../styles/nav.module.css'

const Nav = () => {
    return (
        <nav className={hS.nav}>
            <ul className={hS.list}>
                <li className={hS.item}><Link className={hS.link} to='/'>Home</Link></li>
                <li className={hS.item}><Link className={hS.link} to='/work'>Works</Link></li>
                <li className={hS.item}><Link className={hS.link} to='/blog'>Blog</Link></li>
                <li className={hS.item}><Link className={hS.link} to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav