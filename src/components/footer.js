import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      ></div>
      <br></br>© {new Date().getFullYear()} {data.site.siteMetadata.author} |
      Built with {` `}
      <a href="https://www.gatsbyjs.org" target="_blank">
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
