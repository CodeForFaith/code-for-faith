import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  FiMail,
  FiGithub,
  FiYoutube,
  FiTwitter,
  FiCodepen,
  FiCloud,
  FiCpu,
  FiCodesandbox,
} from "react-icons/fi"

const Footer = () => (
  <footer className="footer">
    <nav className="menu">
      <ul>
        <li>
          <Link to="/contact" title="Contact">
            <FiMail size="16" />
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/CodeForFaith"
            title="GitHub"
            target="_blank"
          >
            <FiGithub size="16" />
          </a>
        </li>
        {/* <li> */}
        {/*   <a */}
        {/*     href="https://www.youtube.com/channel/UCxay0Nei9z7GKbaqXQSoaSg" */}
        {/*     title="YouTube" */}
        {/*     target="_blank" */}
        {/*   > */}
        {/*     <FiYoutube size="16" /> */}
        {/*   </a> */}
        {/* </li> */}
        {/* <li> */}
        {/*   <a */}
        {/*     href="https://twitter.com/CodeForFaith" */}
        {/*     title="Twitter" */}
        {/*     target="_blank" */}
        {/*   > */}
        {/*     <FiTwitter size="16" /> */}
        {/*   </a> */}
        {/* </li> */}
        {/* <li> */}
        {/*   <a */}
        {/*     href="https://codepen.io/CodeForFaith" */}
        {/*     title="CodePen" */}
        {/*     target="_blank" */}
        {/*   > */}
        {/*     <FiCodepen size="16" /> */}
        {/*   </a> */}
        {/* </li> */}
        {/* <li> */}
        {/*   <a */}
        {/*     href="https://soundcloud.com/code-for-faith" */}
        {/*     title="SoundCloud" */}
        {/*     target="_blank" */}
        {/*   > */}
        {/*     <FiCloud size="16" /> */}
        {/*   </a> */}
        {/* </li> */}
        <li>
          <Link to="/qr" title="QR Code">
            <FiCpu size="16" />
          </Link>
        </li>
        {/* <li> */}
        {/*   <a */}
        {/*     href="https://codesandbox.io/u/CodeForFaith" */}
        {/*     title="CodeSandbox" */}
        {/*     target="_blank" */}
        {/*   > */}
        {/*     <FiCodesandbox size="16" /> */}
        {/*   </a> */}
        {/* </li> */}
      </ul>
    </nav>
    <div>
      Code for Faith &copy; 2019 -{" "}
      <Link to={"/privacy-policy"} className={"nav-link"}>
        privacy policy
      </Link>
    </div>
  </footer>
)

export default Footer
