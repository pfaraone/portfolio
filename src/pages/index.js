import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello </h1>
    <p>I'm Pierce, I'm a full stack developer living in sunny Singapore.</p>
    <p>
      Need a developer? <Link to="/contact/">Contact me</Link>
    </p>
  </Layout>
)

export default IndexPage
