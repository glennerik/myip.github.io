/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import AddBodyClass from "react-body-classname"
import Helmet from "react-helmet"

import "./layout-bulma.scss"
import "bulma-helpers/css/bulma-helpers.min.css"

import Header from "./Header"

const isProd = process.env.NODE_ENV === "production"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log("isProd", isProd)

  return (
    <>
      <Helmet>
        {isProd ? (
          <script
            data-ad-client="ca-pub-8326983855300422"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        ) : null}
        <script
          src="https://kit.fontawesome.com/60966f347e.js"
          crossorigin="anonymous"
        />
      </Helmet>
      <AddBodyClass className="has-navbar-fixed-top" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
