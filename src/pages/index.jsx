import React from "react"
import Layout from "../components/layout"
import Works from "../components/works"
import Recent from "../components/recent"
import Head from "../components/head"
import Intro from "../components/intro"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />

            <Intro />

            <Recent />

            <Works />
        </Layout>
    )
}

export default IndexPage
