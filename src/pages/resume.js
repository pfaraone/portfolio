import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import myResume from "../assets/Pierce_Faraone_Resume.pdf"

const resumePage = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <h1>Resume</h1>
      <a href={myResume} target="_blank" external button>
        Download Resume
      </a>
      &nbsp;
    </Layout>
  )
}

export default resumePage
