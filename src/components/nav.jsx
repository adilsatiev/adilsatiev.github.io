import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import * as nS from "../styles/components/nav.module.css"

const Nav = () => {
    return (
        <nav className={nS.nav}>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <label className={nS.label}>
                        <input
                            className={nS.toggle}
                            type="checkbox"
                            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                            checked={theme === "dark"}
                        />{" "}
                    </label>
                )}
            </ThemeToggler>
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
