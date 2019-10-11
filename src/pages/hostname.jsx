import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowHost from "../components/ShowHost/"
import ReactGA from "../components/ReactGA"

export default () => {
  useEffect(() => {
    ReactGA.pageview("hostname")
  }, [])
  return (
    <Layout>
      <SEO title="What is my Hostname & ISP?" />
      <section className="hero is-fullheight-with-navbar is-light is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Your Connection Details</h1>
            <ShowHost />
          </div>
        </div>
      </section>
    </Layout>
  )
}
