import React, { createContext, useReducer } from "react"
import PropTypes from "prop-types"

const initialState = {
  language: "en",
  isGDPRBannerVisible: true,
}

export const StateContext = createContext(initialState)
export const DispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "change-language": {
      return {
        ...state,
        language: action.payload,
      }
    }
    case "toggle-isGDPRBannerVisible": {
      return {
        ...state,
        isGDPRBannerVisible: action.payload,
      }
    }
    default:
      throw Error("Wrong Action Type")
  }
}

export const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}
