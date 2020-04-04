import React, { useState, useContext, useEffect } from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import Context from "../context/context"

const GDPRBanner = props => {
  // prettier-ignore
  console.log('crlntn -- gdpr-banner.js props',props)
  const { state, setState } = useContext(Context)
  const [isVisible, setIsVisible] = useState(state.layout.GDPRBanner.isVisible)

  useEffect(() => {
    // prettier-ignore
    console.log('crlntn -- gdpr-banner.js state',state)
    setIsVisible(state.layout.GDPRBanner.isVisible)
  }, [state])

  const handleIsVisible = () => {
    const tempState = state
    tempState.layout.GDPRBanner.isVisible = false
    // prettier-ignore
    console.log('crlntn -- gdpr-banner.js tempState',tempState)
    setState({ ...tempState })
    // setState({
    //   ...state,
    //   state: { layout: { GDPRBanner: { isVisible: false } } },
    // })
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
