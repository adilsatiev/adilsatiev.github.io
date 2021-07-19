import React from 'react'
import Layout from '../components/layout'
import * as bS from '../styles/blog.module.css'
import { graphql, useStaticQuery } from 'gatsby'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title 
                            date
                        }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <div className={bS.container}>
                <h1 className={bS.header}>Blog</h1>
                <ul lclassName={bS.list}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li className={bS.item}> 
                                <h2 className={bS.title}>{edge.node.frontmatter.title}</h2>
                                <span className={bS.date}>{edge.node.frontmatter.date}</span>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </Layout>
    )
}

export default BlogPage