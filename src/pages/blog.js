import React from 'react'
import Layout from '../components/layout'
import * as bS from '../styles/blog.module.css'

const BlogPage = () => {
    return (
        <Layout>
            <div className={bS.container}>
                <h1 className={bS.header}>Blog</h1>
            </div>
        </Layout>
    )
}

export default BlogPage