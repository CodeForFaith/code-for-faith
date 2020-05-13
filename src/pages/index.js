import React, { useState, useContext, useEffect, useRef } from "react"
import Context from "../context/context"
import { graphql } from "gatsby"
// import TypeIt from "typeit-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

let isLanding = true
let typingCount = 0

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

const IndexPage = ({ data }) => {
  const { state, setState } = useContext(Context)
  const [language, setLanguage] = useState("en")
  // const [instance, setInstance] = useState(null)

  useEffect(() => {
    setLanguage(state.language)
    // if (instance !== null) {
    //   // instance.start()
    //   // instance.destroy()
    //   // instance.delete()
    //   instance.reset()
    //   // instance.empty()
    //   // instance.options({texts: ['test']}).go()
    //   // instance.type("test")
    //   instance.go()
    // }
  }, [state])

  return (
    <Layout>
      <SEO title="Home" />
      <article className="gospel">
        {data.allMarkdownRemark.edges
          .filter(
            edge =>
              edge.node.frontmatter.type === "home" &&
              edge.node.frontmatter.language === language
          )
          .map(edge => (
            <>
              {/* <TypeIt */}
              {/*   element={"h2"} */}
              {/*   options={{ cursorChar: " &#9608;", startDelete: true }} */}
              {/*   getBeforeInit={instance => { */}
              {/*     setInstance(instance) */}
              {/*     return instance */}
              {/*   }} */}
              {/* > */}
              {/*   {edge.node.frontmatter.title} */}
              {/* </TypeIt> */}
              <h2>{edge.node.frontmatter.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            </>
          ))}
      </article>
    </Layout>
  )
}

export default IndexPage
