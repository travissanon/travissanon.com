import React, { useEffect, useState } from "react"
import { StaticQuery, graphql } from "gatsby"

import ArrowUpRight from "../assets/arrow--up-right.svg"
import LogoYoutube from "../assets/logo--youtube.svg"

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
  }, [])

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
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
            <div className="videos__thumbnail">
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                />
                <span>
                  <LogoYoutube className="icon-logo" />
                </span>
              </a>
            </div>
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
