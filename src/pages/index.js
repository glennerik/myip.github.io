import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="What is my IP address?" />

    <section class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 className="title is-1">Your IP address is</h1>
          <h2 class="subtitle is-2">1.2.3.4</h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
