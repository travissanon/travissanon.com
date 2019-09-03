import React from "react"

import Layout from "../components/layout"
import Introduction from "../components/introduction"
import Posts from "../components/posts"

import("../stylesheets/home.scss")

const IndexPage = () => {
  return (
    <Layout>
      <Introduction />
      <Posts />
    </Layout>
  )
}

export default IndexPage
