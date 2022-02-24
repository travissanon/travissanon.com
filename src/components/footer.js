import React from "react"

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div className="footer__social-media">
      <h2 className="footer__social-media-title">Follow Me.</h2>
      <ul className="footer__social-media-links">
        <li className="footer__social-media-link">
          <a
            href="https://www.youtube.com/channel/UClE-pN-OOQrRUwi6HFHmDpA"
            target="_blank"
          >
            Youtube
          </a>
        </li>
        <li className="footer__social-media-link">
          <a
            href="https://www.linkedin.com/in/travis-sanon-b36593164/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="footer__social-media-link">
          <a href="https://codepen.io/travissanon" target="_blank">
            Codepen
          </a>
        </li>
        <li className="footer__social-media-link">
          <a href="https://github.com/travissanon" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
