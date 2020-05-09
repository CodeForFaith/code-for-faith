import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query ResourcesPageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            type
          }
          html
          id
        }
      }
    }
  }
`

const ResourcesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Resources" />
      {data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.type === "resource")
        .map(edge => (
          <article className="resource">
            <div className="title">{edge.node.frontmatter.title}:</div>
            <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
          </article>
        ))}
    </Layout>
  )
}

export default ResourcesPage
