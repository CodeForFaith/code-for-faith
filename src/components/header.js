import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <header className="header">
      <div className="cross">
        _|_
        <br />
        &nbsp;|
        <br />
      </div>
      <div className="code">Code</div>
      <div className="for">for</div>
      <div className="faith">faith</div>
    </header>
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/updates">updates</Link>
        </li>
        <li>
          <Link to="/resources">resources</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  </>
)

Header.propTypes = {
  // siteTitle: PropTypes.string,
}

Header.defaultProps = {
  // siteTitle: ``,
}

export default Header
