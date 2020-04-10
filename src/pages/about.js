import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const aboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <p>Post will show up here later on</p>
      <div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      <div>
        <Link to="/page-3/">Go to page 3</Link>
      </div>
    </Layout>
  )
}

export default aboutPage
