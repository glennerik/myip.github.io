import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from "../components/ReactGA"
import ShowMetric from "../components/ShowMetric"

export default () => {
  useEffect(() => {
    ReactGA.pageview("hostname")
  }, [])
  return (
    <>
      <Helmet
        link={[{ rel: "canonical", href: "https://www.myip.info/hostname" }]}
      />
      <Layout>
        <SEO title="What is my Hostname & ISP?" />
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Your Internet Connection Details</h1>
              <ShowMetric
                endpointUri="https://rdns.myip.info"
                metricName="Hostname"
                label="Hostname"
              />
              <div className="has-margin-top-50" />
              <ShowMetric
                endpointUri="https://ipinfo.io/org"
                metricName="Internet Service Provider"
                label="Internet Service Provider"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
