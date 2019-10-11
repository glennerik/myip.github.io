import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowUA from "../components/ShowUA/"

export default () => {
  return (
    <Layout>
      <SEO title="What is my User-Agent & Browser Details?" />
      <section className="hero is-fullheight-with-navbar is-light is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Your Browser Details</h1>
            <ShowUA />
          </div>
        </div>
      </section>
    </Layout>
  )
}
