import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import IconMenu from "../assets/menu.svg"

const Header = ({ siteTitle }) => {
  const [mobileView, setMobileView] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 425 ? setMobileView(true) : setMobileView(false)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
  })

  return (
    <header className={`header-wrapper`}>
      <div
        className={`header ${mobileNavOpen ? "header--navigation-open" : ""}`}
      >
        <div className="header__title">
          <span className="header__title-name">
            <Link to="/">Travis Sanon.</Link>
          </span>
        </div>
        <div className="header__navigation-container">
          {mobileView && (
            <IconMenu
              className="header__menu"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            />
          )}
          {((mobileView && mobileNavOpen) || !mobileView) && (
            <div
              className={`header__navigation 
                    ${mobileView ? "header__navigation--mobileView" : ""}
            `}
            >
              <Link
                className="header__navigation-item link--prominent"
                to="/about"
              >
                About
              </Link>
              <Link
                className="header__navigation-item link--prominent"
                to="/articles"
              >
                Articles
              </Link>
              <Link
                className="header__navigation-item link--prominent"
                to="/videos"
              >
                Videos
              </Link>
              <a
                href="mailto:traviscsanon@gmail.com"
                className="header__navigation-item link--prominent"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
