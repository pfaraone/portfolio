import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

// const Wrapper = styled.footer`
//   color: green;
// `

// const Text = styled.p`
//   margin: 2rem;
//   text-align: center;

//   a {
//     text-decoration: none;
//   }
// `

const year = new Date().getFullYear()

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
    // <Wrapper>
    // {/* <Text> */}
    <Footer>
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
    </Footer>
    // {/* </Text> */}
    // {/* </Wrapper> */}
  )
}

export default Footer
