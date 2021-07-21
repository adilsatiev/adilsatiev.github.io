import React from "react"
import Layout from "../components/layout"
import * as bS from "../styles/blog.module.css"
import { graphql, Link, useStaticQuery } from "gatsby"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              topic
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <div className={bS.container}>
        <h1 className={bS.header}>Blog</h1>
        <ul className={bS.list}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={bS.item}>
                <h2 className={bS.title}>
                  <Link
                    className={bS.link}
                    to={`/blog/${edge.node.fields.slug}`}
                  >
                    {edge.node.frontmatter.title}
                  </Link>
                </h2>
                <div className={bS.key}>
                  <span className={bS.date}>{edge.node.frontmatter.date}</span>
                  <span className={bS.topic}>
                    {edge.node.frontmatter.topic}
                  </span>
                </div>
                <p className={bS.description}>
                  {edge.node.frontmatter.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPage
