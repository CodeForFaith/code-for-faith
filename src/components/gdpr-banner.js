import React, { useState, useContext, useEffect } from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import Context from "../context/context"

const GDPRBanner = () => {
  const { state, setState } = useContext(Context)
  const [isVisible, setIsVisible] = useState(state.layout.GDPRBanner.isVisible)

  useEffect(() => {
    setIsVisible(state.layout.GDPRBanner.isVisible)
  }, [state])

  const handleIsVisible = () => {
    const tempState = state
    tempState.layout.GDPRBanner.isVisible = false
    setState({ ...tempState })
  }

  return (
    <div className={`gdpr-banner ${isVisible === true ? "visible" : ""}`}>
      <div>
        We do not use any cookies on this website. For more information, please
        read our{" "}
        <Link
          to={`privacy-policy`}
          className={`nav-link-white`}
          onClick={() => handleIsVisible()}
        >
          privacy policy
        </Link>
        .
      </div>
      <div
        className={`nav-link-white button`}
        onClick={() => handleIsVisible()}
      >
        ok
      </div>
    </div>
  )
}

export default GDPRBanner
