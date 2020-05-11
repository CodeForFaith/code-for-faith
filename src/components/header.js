import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"
import Context from "../context/context"

const Header = ({ siteTitle }) => {
  const { state, setState } = useContext(Context)

  const onClickLanguage = language => {
    setState({ ...state, language })
  }

  useEffect(() => {
    const navigatorLanguage = navigator.language
    if (navigator.language === "fr") {
      setState({ ...state, language: navigatorLanguage })
    }
  }, [])

  return (
    <>
      <div className={`languages`}>
        <span
          className={`nav-link ${state.language === "en" ? "underline" : ""}`}
          onClick={() => onClickLanguage("en")}
        >
          en
        </span>
        &nbsp;|&nbsp;
        <span
          className={`nav-link ${state.language === "fr" ? "underline" : ""}`}
          onClick={() => onClickLanguage("fr")}
        >
          fr
        </span>
      </div>
      <header className="header">
        <div className="cross">
          _|_
          <br />
          &nbsp;|
          <br />
        </div>
        <div className="code">Code</div>
        <div className="for">for</div>
        <div className="faith">Faith</div>
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
}

Header.propTypes = {
  // siteTitle: PropTypes.string,
}

Header.defaultProps = {
  // siteTitle: ``,
}

export default Header
