import React, { useState, useContext, useEffect, useRef } from "react"
import { StateContext, DispatchContext } from "../context/context-provider"
import { graphql } from "gatsby"
import TypeIt from "typeit-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            language
            type
          }
        }
      }
    }
  }
`

const getPageContent = (data, language) => {
  const strings = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.type === "home" &&
      edge.node.frontmatter.language === language
  )[0].node

  return strings
}

const IndexPage = ({ data }) => {
  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  const [instance, setInstance] = useState(null)
  const [pageStrings, setPageStrings] = useState()

  useEffect(() => {
    setPageStrings(getPageContent(data, state.language))
    // eslint-disable-next-line
  }, [state.language])

  useEffect(() => {
    if (instance !== null) {
      const isCompletedInterval = setInterval(() => {
        if (instance.is("completed")) {
          setTimeout(() => {
            instance.destroy()
            dispatch({ type: "toggle-isIndexPageTitleDoneTyping", payload: true })
            setInstance(null)
          }, 3000)
          clearInterval(isCompletedInterval)
        }
      }, 1000)

      const pageTitle = pageStrings.frontmatter.title
      instance.reset()
      instance.type(pageTitle)
      instance.go()
    }
  }, [pageStrings, instance])

  return (
    <Layout>
      <SEO title="Home" />
      <article className="gospel">
        {data.allMarkdownRemark.edges
          .filter(
            edge =>
              edge.node.frontmatter.type === "home" &&
              edge.node.frontmatter.language === state.language
          )
          .map(edge => (
            <>
              {state.isIndexPageTitleDoneTyping === false ? (
                <TypeIt
                  element={"h2"}
                  options={{
                    cursorChar: " &#9608;",
                  }}
                  getAfterInit={instance => {
                    setInstance(instance)
                    return instance
                  }}
                />
              ) : (
                <h2
                  dangerouslySetInnerHTML={{
                    __html:
                      edge.node.frontmatter.title +
                      '<span style="visibility: hidden;">&#9608</span>',
                  }}
                />
              )}
              <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            </>
          ))}
      </article>
    </Layout>
  )
}

export default IndexPage
