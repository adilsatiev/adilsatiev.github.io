import React from "react"
import Nav from "./Nav"
import Footer from "./footer"
import * as lS from "../styles/components/layout.module.css"

const Layout = props => {
  return (
    <div className={lS.container}>
      <Nav />
      <div className={lS.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
