import React from "react"

const Introduction = ({ siteTitle }) => (
  <div className="introduction">
    <h1 className="introduction__title">
      <span>👋</span> Hi, I'm Travis
    </h1>
    <p className="introduction__description">
      I'm a front-end developer and semicolon slinger currently focusing on
      building things for the web. I learn new things and use that knowledge to
      build stuff from scratch. I'm also interested in sharing knowledge that
      makes sense.
    </p>
    <div className="introduction__cta">
      <a href="https://travissanon.substack.com/subscribe" target="_blank" class="button">Join Newsletter</a>
      <a href="https://www.youtube.com/c/DevMaterial/featured" target="_blank" class="button button--red">Subscribe on Youtube</a>
    </div>
  </div>
)

export default Introduction
