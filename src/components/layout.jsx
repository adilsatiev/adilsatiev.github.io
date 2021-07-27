import React from "react"
import Nav from "./Nav"
import Footer from "./footer"
import "../styles/global/layout.css"

const Layout = props => {
    return (
        <div className='layout-container'>
            <Nav />
            <div className='layout-content'>{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout
