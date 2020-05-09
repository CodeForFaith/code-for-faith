import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query UpdatesPageQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          html
          id
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            type
          }
        }
      }
    }
  }
`

const UpdatesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Updates" />
      {data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.type === "update")
        .map(edge => (
          <article key={edge.node.id} className="update">
            <p>
              date: {edge.node.frontmatter.date}
              <br />
              title: {edge.node.frontmatter.title}
            </p>
            <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            <hr />
          </article>
        ))}
    </Layout>
  )
}

export default UpdatesPage
