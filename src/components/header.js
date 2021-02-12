import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__title">
      {/* <span className="header__title-emoji" role="img">
        🌑
      </span> */}
      <span className="header__title-name">
        <Link to="/">Travis Sanon.</Link>
      </span>
    </div>
    <div className="header__navigation">
      <Link className="header__navigation-item link--prominent" to="/about">
        About
      </Link>
      <Link className="header__navigation-item link--prominent" to="/articles">
        Articles
      </Link>
      <Link className="header__navigation-item link--prominent" to="/videos">
        Videos
      </Link>
      <a
        href="mailto:traviscsanon@gmail.com"
        className="header__navigation-item link--prominent"
      >
        Contact
      </a>
    </div>
  </header>
)

export default Header
