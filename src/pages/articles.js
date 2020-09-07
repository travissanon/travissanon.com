import React from "react"
import "../stylesheets/articles.scss"
import "../stylesheets/videos.scss"

import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"

const Articles = () => (
  <Layout>
    <SEO title="Page two" />
    <Posts />
  </Layout>
)

export default Articles
