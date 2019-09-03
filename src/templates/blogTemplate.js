import React from "react"
import { graphql } from "gatsby"

import "../stylesheets/article.scss"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post__container">
        <div className="blog-post">
          <h2 className="blog-post__date">{frontmatter.date}</h2>
          <h1 className="blog-post__title">{frontmatter.title}</h1>
          <div
            className="blog-post__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <p className="blog-post__closer">Stay Hungry, Stay Foolish. 🙏</p>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
    }
  }
`
