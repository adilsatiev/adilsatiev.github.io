import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import * as cS from '../styles/contact.module.css'


const ContactPage = () => {
    return (
        <Layout>
            <Head title='Contact'/>
            <div className={cS.container}>
                <h1 className={cS.header}>Contact</h1>
            </div>
        </Layout>
    )
}

export default ContactPage