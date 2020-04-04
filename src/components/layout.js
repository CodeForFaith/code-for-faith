/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ContextProvider } from "../context/context"

import Header from "./header"
import Footer from "./footer"
import GDPRBanner from "./gdpr-banner"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ContextProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="content">{children}</main>
      <Footer />
      <GDPRBanner />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
