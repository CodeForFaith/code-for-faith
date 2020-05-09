import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <p>Look like you're lost...</p>
    <p>
      Here is a good news for you though: <Link to="/">the good news</Link>
    </p>
  </Layout>
)

export default NotFoundPage
