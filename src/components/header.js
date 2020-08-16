import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"
import { StateContext, DispatchContext } from "../context/context-provider"

const Header = ({ siteTitle }) => {
  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  const onClickLanguage = language => {
    dispatch({ type: "toggle-isIndexPageTitleDoneTyping", payload: true })
    dispatch({ type: "change-language", payload: language })
  }

  const handleClickLink = () => {
    dispatch({ type: "toggle-isIndexPageTitleDoneTyping", payload: true })
  }

  useEffect(() => {
    const navigatorLanguage = navigator.language
    if (navigatorLanguage === "fr") {
      dispatch({ type: "change-language", payload: navigatorLanguage })
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
            <Link to="/updates" onClick={() => handleClickLink()}>
              updates
            </Link>
          </li>
          <li>
            <Link to="/resources" onClick={() => handleClickLink()}>
              resources
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => handleClickLink()}>
              contact
            </Link>
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
