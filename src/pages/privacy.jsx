import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from "../components/ReactGA"

export default () => {
  useEffect(() => {
    ReactGA.pageview("privacy")
  }, [])
  return (
    <>
      <Helmet
        link={[{ rel: "canonical", href: "https://www.myip.info/privacy" }]}
      />
      <Layout>
        <SEO title="Privacy Policy" />
        <section className="section">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered">
              Privacy Policy
            </h1>
            <p className="has-margin-bottom-50">
              This website is often used in regard to internet security.
              That&#39;s the main reason we made it. It should come as no
              surprise that MyIP.info takes the privacy of our users seriously.
              These are details about how we use information retrieved about you
              when you use this service.
            </p>

            <div className="columns">
              <div className="column">
                <h2 className="subtitle is-size-3">Logging</h2>
                <p>
                  Our web server logs information your browser makes available
                  about you, and stores it for a limited time of 2 months. This
                  information is only viewed in aggregated form. The main
                  purpose of this usage is to learn about visitor- and
                  crawler-patters in the effort of improving our services. This
                  is a list of what&#39;s collected and stored for 2 months for
                  each request you make to our servers
                </p>
                <ul>
                  <li>
                    <i>Your IP Address</i>. To be clear: We don&#39;t really
                    care about your IP address. Nor do we look at it. The only
                    reason it is included in the logging is because it
                    automatically helps aggregate visitor usage patterns.
                  </li>
                  <li>
                    <i>Your location</i>. The location precision is high level
                    such as continent, country and city. No more detailed than
                    city.
                  </li>
                  <li>
                    <i>The cookies you send us</i>. Your browser do only send
                    cookies meant for our service on the domain myip.info.
                    Cookies related to other domains or places are not sent to
                    us.
                  </li>
                  <li>
                    <i>Your browser information</i>, which mainly includes:
                    <ul>
                      <li>Device type, such as Mobile, Tablet, Desktop</li>
                      <li>
                        Platform type / Operating system, such as Windows,
                        Linux, Mac
                      </li>
                      <li>
                        Your browser type, such as Chrome, Safari, Opera,
                        FireFox
                      </li>
                    </ul>
                  </li>
                </ul>

                <h2 className="subtitle is-size-3 has-margin-top-50">
                  Advertisement
                </h2>
                <p>
                  We don&#39;t have any advertisement on MyIP.info. We made this
                  site only for fun, and to learn about information technology
                  ourselves, as well as a reference for other projects we may
                  involve ourselves in.
                </p>
                <p>
                  So you don&#39;t need to worry about third party advertisement
                  tracking-cookies, or any other issues that can be related to
                  using web-advertisement.
                </p>

                <h2 className="subtitle is-size-3 has-margin-top-50">
                  JavaScript
                </h2>
                <p>
                  You can use this site without JavaScript, but not all features
                  will be available to you when doing so. We use JavaScript for
                  the following purposes:
                </p>
                <ul>
                  <li>
                    Help detect as many as possible, differently available,
                    data-retrieval methods about you. This is only for
                    displaying it back to you, so that you can know what can be
                    retrieved and collected about you by this and other web
                    sites &mdash;{" "}
                    <i>Which is the main purpose of this website</i>!
                  </li>
                  <li>
                    Verify that neccessary information is supplied when users
                    try to make contact with MyIP.info
                  </li>
                  <li>
                    Track visitor behavior to learn about site usage patterns
                  </li>
                </ul>
              </div>

              <div className="column">
                <h2 className="subtitle is-size-3">Third Party Data Sharing</h2>
                <p>
                  We do not send, rent, sell or in any form share information
                  about you or your usage of- or visits to- this site, to any
                  third party. We do not collect or store potentially personally
                  identifying information about you such as you email address.
                  We don&#39;t ask for or require your email address for any
                  usage of this site unless you want to{" "}
                  <Link to="/contact">make contact</Link>. In that case, your
                  email address is only stored in our inbox as the{" "}
                  <i>reply to</i> source of the person making contact. It is not
                  logged or stored anywhere else.
                </p>

                <h2 className="subtitle is-size-3 has-margin-top-50">
                  Third Party Tracking
                </h2>
                <p>MyIP.info uses Google-Analytics and AddThis</p>
                <ul>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Google_Analytics#Privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="External link to Wikipedia article about Google-Analytics and Privacy"
                    >
                      Google-Analytics
                    </a>{" "}
                    collects non-private information about your interactions
                    with this site in aggregated form. We use this to learn
                    about visitor behavior and site usage patterns. We don&#39;t
                    allow anyone other than ourselves to view this information,
                    and we don&#39;t allow Google-Analytics to store or share
                    this information with anyone (that&#39;s an option in every
                    Google-Analytics account)
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/AddThis"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="External link to Wikipedia article about AddThis"
                    >
                      AddThis
                    </a>{" "}
                    is a bookmark / save / social sharing service that we use
                    for making it easy for users of this site to respectively
                    bookmark / save / share MyIP.info. To allow for this we
                    include a third-party JavaScript code made by AddThis (which
                    we don&#39;t control) on MyIP.info. The main result of this
                    is the orange round arrow you should see at the bottom right
                    of your screen if you have enabled JavaScript.
                  </li>
                </ul>

                <h2 className="subtitle is-size-3 has-margin-top-50">
                  Encryption
                </h2>

                <p>
                  <i>Encrypted communication with you and MyIP.info</i>. All
                  your interactions with this site is personal and secured with
                  standard https/ssl encryption. This means that nobobdy can see
                  the information sent between you and MyIP.info.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
