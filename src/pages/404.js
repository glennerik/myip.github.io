import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="hero is-fullheight-with-navbar is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist...</p>
          <p>
            <Link to="/">Go to the front page</Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
