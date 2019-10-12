import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowUA from "../components/ShowUA"
import ReactGA from "../components/ReactGA"
import ShowMetric from "../components/ShowMetric"

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
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Your Browser Details</h1>
              <ShowMetric
                endpointUri="https://useragent.myip.info"
                metricName="User-Agent"
                label="User-Agent"
              />
              <div className="has-margin-top-50" />
              <ShowMetric
                endpointUri="https://browser.myip.info"
                metricName="Browser Name"
                label="Browser Name"
              />
              <div className="has-margin-top-50" />
              <ShowMetric
                endpointUri="https://device.myip.info"
                metricName="Device Type"
                label="Device Type"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
