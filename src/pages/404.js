import React from 'react'
import Layout from '../components/layout'
import * as iS from '../styles/index.module.css'


const NotFound = () => {
    return (
        <Layout>
            <div className={iS.error}>
                <h1>Sorry, but Page Not Found</h1>
            </div>
        </Layout>
    )
}

export default NotFound