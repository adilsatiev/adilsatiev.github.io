import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import * as iS from "../styles/index.module.css"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <div className={iS.error}>
        <h1>Sorry, but Page Not Found</h1>
      </div>
    </Layout>
  )
}

export default NotFound
