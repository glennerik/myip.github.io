import React from "react"
import AddBodyClass from "react-body-classname"
import Helmet from "react-helmet"

const isProd = process.env.NODE_ENV === "production"

export default () => (
  <>
    <AddBodyClass className="has-navbar-fixed-top" />
    <Helmet>
      {isProd ? (
        <script
          data-ad-client="ca-pub-8326983855300422"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      ) : null}
      <link
        href="https://file.myfontastic.com/cTTd9UxM3oBZJk4aaidmpb/icons.css"
        rel="stylesheet"
      />
    </Helmet>
  </>
)
