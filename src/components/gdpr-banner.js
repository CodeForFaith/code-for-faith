import React, { useState, useContext, useEffect } from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StateContext, DispatchContext } from "../context/context-provider"

const GDPRBanner = () => {
  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  // useEffect(() => {
  //   setIsVisible(state.layout.GDPRBanner.isVisible)
  // }, [state])

  const handleIsVisible = (payload) => {
    dispatch({type: 'toggle-isGDPRBannerVisible', payload})
  }

  return (
    <div
      className={`gdpr-banner ${
        state.isGDPRBannerVisible === true ? "visible" : ""
      }`}
    >
      <div>
        We do not use any cookies on this website. For more information, please
        read our{" "}
        <Link
          to={`privacy-policy`}
          className={`nav-link-black`}
          onClick={() => handleIsVisible(false)}
        >
          privacy policy
        </Link>
        .
      </div>
      <div
        className={`nav-link-black button`}
          onClick={() => handleIsVisible(false)}
      >
        ok
      </div>
    </div>
  )
}

export default GDPRBanner
