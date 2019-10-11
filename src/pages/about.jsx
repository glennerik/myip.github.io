import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from "../components/ReactGA"

export default () => {
  useEffect(() => {
    ReactGA.pageview("about")
  }, [])
  return (
    <>
      <Helmet
        link={[{ rel: "canonical", href: "https://www.myip.info/about" }]}
      />
      <Layout>
        <SEO title="What this site is about" />
        <section className="section">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered">
              What this site is about
            </h1>

            <div className="columns">
              <div className="column">
                <h2 className="subtitle is-size-3">
                  Show you technical information about your electronic device
                </h2>
                <p>
                  This website is dedicated to showing you information about the
                  electronic device you use to access the web. This can be
                  useful in many situations when you want to know more about
                  what type of information is revealed of your activites
                  on-line. It is also a good place to check how well you are
                  anonymized, when that is something you are trying to achieve.
                </p>
              </div>
              <div className="column">
                <h2 className="subtitle is-size-3">
                  We see what the rest of the internet sees
                </h2>
                <p>
                  One of the main reasons for accessing a website like MyIP.info
                  is because our service is a remote system from you, just like
                  many other services you use on-line. Therefor, most of what we
                  are able to see, and reflect back to you, will be the same
                  most other on-line services will see.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <h2 className="subtitle is-size-3">
                  Learn &amp; know what information can be collected about you
                </h2>
                <p>
                  <Link to="/">MyIP.info</Link> is a good source to know what
                  type of information other places you visit on the web may
                  collect about you. For example, based on your IP address we
                  can determine, with a fair accuracty, your location. And based
                  on the user-agent data passed by your browser we can
                  determine, with fair accuracty, your computer device,
                  platform, operating system and browser type.
                </p>
              </div>

              <div className="column">
                <h2 className="subtitle is-size-3">Your IP Address</h2>
                <p>
                  <strong>
                    Also known as <i>Internet Protocol Address</i>
                  </strong>
                </p>
                <p>
                  An IP address is an identifier each devices connected to the
                  internet has. It is neccessary to send and fetch information
                  online. Usually it uniquely identifies you. IP addresses come
                  in two types. MyIP.info detects both!
                </p>

                <div className="has-margin-top-20" />

                <div className="tile is-child notification is-info">
                  <div className="content">
                    <h3 className="title">IPv6</h3>
                    <div className="content">
                      IPv6 is on the form{" "}
                      <i>hexval:hexval:hexval:hexval::hexval:hexval</i>. For
                      example
                      <i>2604:a880:400:d0::4c66:8001</i>
                      <a
                        href="https://en.wikipedia.org/wiki/IPv6"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="is-block"
                      >
                        Read more about IPv6 on wikipedia
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tile is-parent">
                  <div className="tile is-child notification is-info">
                    <div className="content">
                      <h3 className="title">IPv4</h3>
                      <div className="content">
                        IPv4 is on the form <i>number.number.number.number</i>.
                        For example <i>8.8.8.8</i>
                        <a
                          href="https://en.wikipedia.org/wiki/IPv4"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="is-block"
                        >
                          Read more about IPv4 on wikipedia
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <a
                    href="https://en.wikipedia.org/wiki/IP_address"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn more about IP Addresses in general on wikipedia
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
