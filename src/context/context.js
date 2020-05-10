import React, { createContext, useState } from "react"
import PropTypes from "prop-types"

const context = {
  language: 'en',
  layout: {
    GDPRBanner: {
      isVisible: true,
    },
  },
}

const Context = createContext()

export const ContextProvider = props => {
  const [state, setState] = useState(context)

  return (
    <Context.Provider value={{ state, setState }}>
      {props.children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}

export default Context
