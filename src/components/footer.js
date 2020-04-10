import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => {
  return (
    <footer
    // style={{
    //   background: `rebeccapurple`,
    //   marginBottom: `1.45rem`,
    // }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      ></div>
      <br></br>
      Created by Pierce Faraone <br></br>© {new Date().getFullYear()}, Built
      with
      {` `}
      <a href="https://www.gatsbyjs.org" target="_blank">
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
