import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import NavLink from "../components/nav-link"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello </h1>
    <p>I'm Pierce, I'm a full stack developer living in sunny Singapore.</p>
    <span>
      Need a developer? <Link to="/contact/">Contact me</Link>
    </span>
  </Layout>
)

export default IndexPage
