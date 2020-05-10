import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"
import typing from "../utils/typing"

import Layout from "../components/layout"
import SEO from "../components/seo"

let isLanding = true

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            language
            type
          }
          html
          id
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const terminalLineRef = useRef()
  console.log(terminalLineRef)
  useEffect(() => {
    if (isLanding === true && terminalLineRef.current !== null) {
      typing("terminal-line")
      isLanding = false
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <article className="gospel">
        {data.allMarkdownRemark.edges
          .filter(
            edge =>
              edge.node.frontmatter.type === "home" &&
              edge.node.frontmatter.language === "en"
          )
          .map(edge => (
            <>
              <h2
                id="terminal-line"
                ref={terminalLineRef}
                className={`${isLanding === true && "hidden"}`}
              >
                Heaven or Hell, where will you spend etenity?
              </h2>
              <div id="cursor-line" className="visible"></div>
              <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            </>
          ))}
      </article>
    </Layout>
  )
}

export default IndexPage
