import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from "../components/ReactGA"

const ContactPage = () => {
  useEffect(() => {
    ReactGA.pageview("contact")
  }, [])
  return (
    <>
      <Helmet
        link={[{ rel: "canonical", href: "https://www.myip.info/contact" }]}
      />
      <Layout>
        <SEO title="Get in touch" />
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container has-text-centered">Contact page</div>
          </div>
        </section>
      </Layout>
    </>
  )
}
export default ContactPage
