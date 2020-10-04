import React from "react"

import Layout from "../components/layout"
import Introduction from "../components/introduction"
import Posts from "../components/posts"
import Videos from "../components/videos"

import("../stylesheets/home.scss")

const IndexPage = () => {
  return (
    <Layout>
      <Introduction />
      <Posts />
      <Videos count={6} />
    </Layout>
  )
}

export default IndexPage
