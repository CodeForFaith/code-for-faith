import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <nav className="menu">
      <ul>
        <li>
          <a href="/contact.html" title="Contact">
            mail
          </a>
        </li>
        <li>
          <a
            href="https://github.com/CodeForFaith"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCxay0Nei9z7GKbaqXQSoaSg"
            title="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            youtube
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/CodeForFaith"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/CodeForFaith"
            title="Codepen"
            target="_blank"
            rel="noopener noreferrer"
          >
            codepen
          </a>
        </li>
        <li>
          <a
            href="https://soundcloud.com/code-for-faith"
            title="SoundCloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            soundcloud
          </a>
        </li>
        <li>
          <a href="/qr.html" title="QR Code">
            qr
          </a>
        </li>
      </ul>
    </nav>
    <div>Code for Faith &copy; 2019</div>
  </footer>
)

export default Footer
