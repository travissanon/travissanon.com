import React from "react"
import { Feather } from "react-feather"

const Introduction = ({ siteTitle }) => (
  <div className="introduction">
    <h1 className="introduction__title">
      <span>
        <Feather size={"40"} strokeWidth={"1.5"} />
      </span>{" "}
      Hi, I'm Travis.
    </h1>
    <p className="introduction__description">
      I'm a front-end developer and semicolon slinger currently focusing on
      building things for the web. I learn new things and use that knowledge to
      build stuff from scratch. I'm also interested in sharing knowledge that
      makes sense.
    </p>
    <div className="introduction__cta">
      <a
        href="https://travissanon.substack.com/subscribe"
        target="_blank"
        className="button"
      >
        Join Newsletter
      </a>
      <a
        href="https://www.youtube.com/c/DevMaterial/featured"
        target="_blank"
        className="button button--red"
      >
        Subscribe on Youtube
      </a>
    </div>
  </div>
)

export default Introduction
