import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import myResume from "../assets/Pierce_Faraone_Resume.pdf"
import { Resume } from "../components"

import styled from "styled-components"

const ResumePage = () => {
  return (
    <Layout activePage="resume">
      <SEO title="Resume" />
      {/* <Resume> */}
      <h1>Resume</h1>
      <div>
        <a href={myResume} target="_blank" external button>
          Download Resume
        </a>
      </div>
      <div>
        <br></br>
        <h3>Skills</h3>
        Programming Languages: Proficient in Python, Java; Familiar in C++, C,
        JavaScript (ES6), Node.js, SQL, MATLAB, Verilog, VHDL
      </div>
      &nbsp;
      {/* </Resume> */}
    </Layout>
  )
}

export default ResumePage
