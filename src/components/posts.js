import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Posts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMM DD, YYYY")
                path
                title
              }
            }
          }
        }
      }
    `}
    render={data => {
      const PostData = data.allMarkdownRemark.edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => edge.node.frontmatter)

      const Posts = PostData.map((post, i) => {
        return (
          <div className="articles__article" key={i}>
            <a className="articles__article-link" href={post.path}>
              <div className="articles__date">{post.date}</div>
              <div className="articles__title">{post.title}</div>
            </a>
          </div>
        )
      })
      return (
        <div className="articles">
          <h1 className="articles__header">Articles</h1>
          <div className="articles__container">{Posts}</div>
        </div>
      )
    }}
  />
)

export default Posts
