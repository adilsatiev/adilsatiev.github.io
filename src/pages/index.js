import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'
import * as iS from '../styles/index.module.css'

const IndexPage = () => {
  return (
    <div>
      <Header/>

      <h1 className={iS.header}>
        Hello Hello 
      </h1>

      <Link to='/contact'>Link</Link>
      <Footer/>
    </div>
  )
}

export default IndexPage