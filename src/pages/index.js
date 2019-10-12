import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowMetric from "../components/ShowMetric/"
import ReactGA from "../components/ReactGA"

const IndexPage = () => {
  useEffect(() => {
    ReactGA.pageview("index")
  }, [])
  return (
    <>
      <Helmet link={[{ rel: "canonical", href: "https://www.myip.info" }]} />
      <Layout>
        <SEO title="What is my IP address?" />
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Your IP address</h1>
              <ShowMetric
                label="IPv4"
                endpointUri="https://ipv4.myip.info"
                metricName="IPv4 Address"
              />
              <div className="has-margin-top-50" />
              <ShowMetric
                label="IPv6"
                endpointUri="https://ipv6.myip.info"
                metricName="IPv6 Address"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
export default IndexPage
