import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import React from "react"

const Wrapper = styled.footer`
  color: var(--contrast-secondary-light);
  background: var(--contrast-secondary-dark);
  width: 100%;
  bottom: 0;
  margin-top: 2rem;
  text-align: left;
  a {
    color: inherit !important;
    text-decoration: none;
  }
`

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
    <footer>
      <Wrapper>
        © {year} {data.site.siteMetadata.author} | Built with {` `}
        <a href="https://www.gatsbyjs.org" target="_blank">
          Gatsby
        </a>
      </Wrapper>
    </footer>
  )
}

export default Footer
