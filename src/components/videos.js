import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Videos = () => (
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

      let youtubeURL = "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part=contentDetails&mine=true"
      const API_KEY = 'AIzaSyDjdoRuHJxZD-C1QbM-xM2v3BhsPlNOQwo'
      const CLIENT_ID = '1082697838552-vcsmkq2ht5f92tsv85vq5rmdce7gka4b.apps.googleusercontent.com'
      const CLIENT_SECRET = 'xhbKCyTMcnI9wCIID0bYgM9X'

      const VideoData = data.allMarkdownRemark.edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => edge.node.frontmatter)

      const YoutubePlayer = () => (
        <div className="videos__video" key="3">
          <iframe id="ytplayer" type="text/html" width="336" height="189"
            src="https://www.youtube.com/embed/o6Lxb8Ai6Bc"
            frameborder="0"></iframe>
          <div className="videos__metadata">
            <div className="videos__title">Hello, feds</div>
            <div className="videos__date">Sept 11, 2020</div>
          </div>
        </div>
      )

      return (
        <div className="videos videos--homepage">
          <h1 className="videos__header">Videos</h1>
          <div className="videos__container">
            <YoutubePlayer />
            <YoutubePlayer />
            <YoutubePlayer />
            <YoutubePlayer />
            <YoutubePlayer />
            <YoutubePlayer />
          </div>
        </div>
      )
    }}
  />
)

export default Videos