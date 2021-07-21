import React from "react"
import Layout from "../components/layout"
import * as bS from "../styles/blogtemplate.module.css"
import { graphql, Link } from "gatsby"
import Head from "../components/head"

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        topic
        description
      }
      html
    }
  }
`

const BlogTemplate = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <div className={bS.container}>
        <div className={bS.headerWrapper}>
          <h1 className={bS.header}>
            {props.data.markdownRemark.frontmatter.title}
          </h1>
          <Link className={bS.link} to="/blog">
            Go back
          </Link>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogTemplate
