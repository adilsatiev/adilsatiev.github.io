import React from 'react'
import Layout from '../../../components/layout'
import * as nS from "./nodeapps.module.css"

export default function NodeApps() {
    return (
        <Layout>
            <div className={nS.container}>
                <h1 className={nS.header}>Node Apps</h1>
            </div>  
        </Layout>
    )
}
