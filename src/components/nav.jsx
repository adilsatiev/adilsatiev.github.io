import React from "react"
import { Link } from "gatsby"
import * as nS from "../styles/components/nav.module.css"

const Nav = () => {
    return (
        <nav className={nS.nav}>
            <ul className={nS.list}>
                <li className={nS.item}>
                    <Link className={nS.link} activeClassName={nS.active} to="/">
                        Home
                    </Link>
                </li>
                <li className={nS.item}>
                    <Link className={nS.link} activeClassName={nS.active} to="/projects">
                        Works
                    </Link>
                </li>
                <li className={nS.item}>
                    <Link className={nS.link} activeClassName={nS.active} to="/blog">
                        Blog
                    </Link>
                </li>
                <li className={nS.item}>
                    <Link className={nS.link} activeClassName={nS.active} to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
