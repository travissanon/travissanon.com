import React, { useEffect, useState } from "react"
import { StaticQuery, graphql } from "gatsby"

const videoDataRaw = require("../data/videos.json")

const Videos = ({ count }) => {
  const [videoData, setVideoData] = useState(null)

  useEffect(() => {
    const getVideoData = (rawData, num) => {
      let data = []

      for (let i = 0; i < num; i++) {
        data.push(rawData.items[i])
      }

      return data
    }

    setVideoData(getVideoData(videoDataRaw, count))
  }, []);

  return (
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
        const parseTimestampForDate = str => str.split("T")[0]

        // const VideoData = data.allMarkdownRemark.edges
        //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        //   .map(edge => edge.node.frontmatter)

        const YoutubePlayer = ({ title, videoId, published, key }) => (
          <div className="videos__video" key={key}>
            <iframe
              id="ytplayer"
              type="text/html"
              width="336"
              height="189"
              src={`https://www.youtube.com/embed/${videoId}?autohide=1&showinfo=0&controls=0`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="videos__metadata">
              <div className="videos__title">{title}</div>
              <div className="videos__date">
                {parseTimestampForDate(published)}
              </div>
            </div>
          </div>
        )

        return (
          <div className="videos videos--homepage">
            <h1 className="videos__header">Videos</h1>
            <div className="videos__container">
              {videoData === null || videoData === undefined ? (
                <div></div>
              ) : (
                videoData.map((video, i) => {
                  return (
                    <YoutubePlayer
                      title={video.snippet.title}
                      videoId={video.id.videoId}
                      published={video.snippet.publishedAt}
                      key={i}
                    />
                  )
                })
              )}
            </div>
          </div>
        )
      }}
    />
  )
}

export default Videos
