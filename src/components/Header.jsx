import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Logo } from "./Images"
import PageRefresh from "./PageRefresh"

/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = ({ siteTitle }) => {
  const [isActive, setActive] = useState(false)
  const toggleActive = () => setActive(!isActive)
  return (
    <header>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" title="MyIP.info" className="has-margin-10">
            <span className="image is-64x64">
              <Logo />
            </span>
            MyIP.info
          </Link>

          <a // eslint-disable-line jsx-a11y/anchor-is-valid
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="myIpTopNavbarOpen"
            onClick={toggleActive}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          id="myIpTopNavbarOpen"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              My IP
            </Link>
            <Link to="/useragent.html" className="navbar-item">
              My Browser
            </Link>
            <Link to="/hostname.html" className="navbar-item">
              My Hostname
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <Link to="/privacy" className="navbar-item">
                  Privacy
                </Link>
                <Link to="/contat" className="navbar-item">
                  Contact
                </Link>
                <hr className="navbar-divider" />
                <Link to="/" className="navbar-item">
                  Home
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <PageRefresh />
              </div>
            </div>
            <div className="navbar-item">
              <Link to="/">© {new Date().getFullYear()}</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
