/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// gatsby-browser.js
import React from "react"
import { ContextProvider } from "./src/context/context"

export const wrapRootElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>
}
