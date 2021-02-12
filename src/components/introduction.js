import React from "react"
import UpArrowRight from "../assets/arrow--up-right.svg"

const Introduction = ({ siteTitle }) => (
  <div className="introduction">
    <h1 className="introduction__title">Hi, I'm Travis.</h1>
    <p className="introduction__description">
      I'm a front-end developer and semicolon slinger currently focusing on
      building things for the web. I learn new things and use that knowledge to
      build stuff from scratch. I'm also interested in sharing knowledge that
      makes sense.
    </p>
    <div className="introduction__cta">
      <a
        href="https://github.com/travissanon"
        target="_blank"
        className="button"
      >
        <span>
          <span>Github</span>
          <UpArrowRight />
        </span>
      </a>
      <a
        href="https://www.youtube.com/c/DevMaterial/featured"
        target="_blank"
        className="button button--red"
      >
        <span>
          <span>Youtube</span>
          <UpArrowRight />
        </span>
      </a>
      <a
        href="https://www.youtube.com/c/DevMaterial/featured"
        target="_blank"
        className="button button--dark-grey"
      >
        <span>
          <span>Codepen</span>
          <UpArrowRight />
        </span>
      </a>
    </div>
  </div>
)

export default Introduction
