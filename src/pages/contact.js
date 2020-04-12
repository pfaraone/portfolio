import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const contactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>About</h1>
      <p>
        The best way to reach me is at @pierce.faraone on{" "}
        <a href="https://www.linkedin.com/in/pierce-faraone/" target="_blank">
          Linkedin
        </a>
      </p>
    </Layout>
  )
}

export default contactPage
