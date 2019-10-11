import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowIP from "../components/ShowIP/"
import ReactGA from "../components/ReactGA"

const IndexPage = () => {
  useEffect(() => {
    ReactGA.pageview("index")
  }, [])
  return (
    <Layout>
      <SEO title="What is my IP address?" />
      <section className="hero is-fullheight-with-navbar is-light is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Your IP address</h1>
            <ShowIP />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
