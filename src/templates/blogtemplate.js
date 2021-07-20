import React from 'react'
import Layout from '../components/layout'
import * as bS from '../styles/blogtemplate.module.css'
import { graphql } from 'gatsby'

export const query = graphql`
query ( $slug: String! ) {
    markdownRemark (fields: { slug: { eq: $slug } } ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const BlogTemplate = (props) => {
    return (
        <Layout>
            <div className={bS.container}>
                <h1 className={bS.header}>
                    {props.data.markdownRemark.frontmatter.title}
                </h1>

                <span className={bS.date}>
                    {props.data.markdownRemark.frontmatter.date}
                </span>

                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </div>
        </Layout>
    )
}

export default BlogTemplate