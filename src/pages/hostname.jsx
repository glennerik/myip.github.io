import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowHost from "../components/ShowHost"
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
                metricName="your Hostname"
                label="Your Hostname"
              />
              <div className="has-margin-top-50" />
              <ShowMetric
                endpointUri="https://ipinfo.io/org"
                metricName="your Internet Service Provider"
                label="Your Internet Service Provider"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
