import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowUA from "../components/ShowUA/"
import ReactGA from "../components/ReactGA"

export default () => {
  useEffect(() => {
    ReactGA.pageview("useragent")
  }, [])
  return (
    <>
      <Helmet
        link={[{ rel: "canonical", href: "https://www.myip.info/useragent" }]}
      />
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
    </>
  )
}
