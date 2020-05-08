import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query UpdatesPageQuery {
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
      <article className="update">
        <p>
          date: 05/26/2020
          <br />
          title: v0.0.3
        </p>
        <p>
          <a href="https://pypi.org/project/gospel/">gospel</a> updates:
          <br />
          <ul>
            <li>create a gospel cli app</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 05/04/2020
          <br />
          title: v1.1.0
        </p>
        <p>
          <a href="https://codeforfaith.com">website</a> updates:
          <br />
          <ul>
            <li>new email contact@codeforfaith.com</li>
            <li>update footer link and design, add dynamic year</li>
            <li>update privacy-policy v0.2.0</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 04/04/2020
          <br />
          title: v1.0.0
        </p>
        <p>
          <a href="https://codeforfaith.com">website</a> updates:
          <br />
          <ul>
            <li>v1.0.0 is live!</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 04/04/2020
          <br />
          title: v0.8.0
        </p>
        <p>
          <a href="https://codeforfaith.com">website</a> updates:
          <br />
          <ul>
            <li>update privacy policy page v0.1.1</li>
            <li>fix dynamic home page title bug</li>
            <li>update ministries list</li>
            <li>add GDPR banner</li>
            <li>update icons footer</li>
            <li>update readme</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 01/16/2020
          <br />
          title: v0.7.0
        </p>
        <p>
          <a href="https://codeforfaith.com">website</a> updates:
          <br />
          <ul>
            <li>add privacy policy page v0.1.0</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 09/15/2019
          <br />
          title: v0.0.3
        </p>
        <p>
          <a href="https://github.com/CodeForFaith/key-logger">key-logger</a>{" "}
          updates:
          <br />
          <ul>
            <li>update readme.md</li>
            <li>add .gitignore</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 09/15/2019
          <br />
          title: v0.6.0
        </p>
        <p>
          <a href="https://codeforfaith.com">website</a> updates:
          <br />
          <ul>
            <li>update readme.md</li>
            <li>add codepen icon to footer</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 09/06/2019
          <br />
          title: v0.5.0
        </p>
        <p>
          website updates:
          <br />
          <ul>
            <li>add Shofar Ministries in the resources page</li>
            <li>add contact page</li>
            <li>add icons to the footer</li>
            <li>add contact icon to footer</li>
            <li>add CodeSandbox account to footer</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 09/04/2019
          <br />
          title: v0.4.0
        </p>
        <p>
          website updates:
          <br />
          <ul>
            <li>center qr code on qr page</li>
            <li>fix footer trucature</li>
            <li>add sound-cloud link in footer</li>
            <li>
              add resources: Bible.is, Faith Comes By Hearing, The Voice of the
              Martyrs, and many others...
            </li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 09/03/2019
          <br />
          title: v0.3.0
        </p>
        <p>
          website updates:
          <br />
          <ul>
            <li>move social links to footer</li>
            <li>modify site title capitalization</li>
            <li>
              add section in the resources' page (Bible, Truther, Ministries,
              Music)
            </li>
            <li>add qr code page</li>
            <li>add favicon</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 09/02/2019
          <br />
          title: v0.2.0
        </p>
        <p>
          website updates:
          <br />
          <ul>
            <li>https enabled</li>
            <li>add resources page</li>
            <li>add github, twitter, resources to menu</li>
          </ul>
        </p>
        <hr />
      </article>
      <article className="update">
        <p>
          date: 09/01/2019
          <br />
          title: v0.1.0
        </p>
        <p>
          Wesite is live at{" "}
          <a href="//codeforfaith.com" target="_blank">
            http://codeforfaith.com
          </a>
          <br />
          Github repository at{" "}
          <a
            href="https://github.com/CodeForFaith/code-for-faith"
            target="_blank"
          >
            https://github.com/CodeForFaith/code-for-faith
          </a>
        </p>
        <hr />
      </article>
    </Layout>
  )
}

export default UpdatesPage
