/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

import "../layout.scss"

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: var(--background);
`

const Body = styled.div`
  flex: 1;
  padding: 0 1.0875rem 1.45rem;
`

const Main = styled.main`
  margin: auto;
`

const Layout = ({ children, activePage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Background>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Body>
        <div className="container">
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <main>{children}</main>
          <Footer />
        </div>
      </Body>
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
