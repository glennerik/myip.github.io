import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="What is my IP address?" />
    <div className="text-center">
      <h1>Your IP address is</h1>
      <p>1.1.1.1</p>
    </div>
  </Layout>
)

export default IndexPage
