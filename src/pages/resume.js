import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const resumePage = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <h1>Resume</h1>
      <p>Post will show up here later on</p>
      &nbsp;
      <div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      <div>
        <Link to="/page-3/">Go to page 3</Link>
      </div>
    </Layout>
  )
}

export default resumePage
