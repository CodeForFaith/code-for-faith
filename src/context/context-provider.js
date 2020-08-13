import React, { createContext, useReducer } from "react"
import PropTypes from "prop-types"

export const StateContext = createContext()
export const DispatchContext = createContext()

const initialState = {
  language: "en",
  isGDPRBannerVisible: true,
}

const reducer = (state, action) => {
  // prettier-ignore
  console.log('crlntn -- context-provider.js action',action)
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
