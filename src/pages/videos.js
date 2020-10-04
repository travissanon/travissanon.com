import React from "react"
import "../stylesheets/articles.scss"
import "../stylesheets/videos.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos"

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <Videos count={40} />
  </Layout>
)

export default About
