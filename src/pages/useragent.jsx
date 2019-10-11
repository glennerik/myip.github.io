import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowIP from "../components/ShowIP/"

export default () => {
  return (
    <Layout>
      <SEO title="What is my User-Agent?" />

      <section className="hero is-fullheight-with-navbar is-light is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Your User-Agent</h1>
            <ShowIP />
          </div>
        </div>
      </section>
    </Layout>
  )
}
