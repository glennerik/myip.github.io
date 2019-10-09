import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="What is my IP address?" />

    <section class="hero is-medium is-light is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 className="title">Your IP address is</h1>
          <span class="tag is-dark is-large">156.234.13.199</span>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
