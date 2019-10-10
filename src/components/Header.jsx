import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Logo } from "./Images"
import PageRefresh from "./PageRefresh"

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
          <Link to="/" title="MyIP.info">
            <div className="image is-32x32 has-margin-10">
              <Logo />
            </div>
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
            <Link to="/myBrowser" className="navbar-item">
              My Browser
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Privacy</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
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
              <Link to="/">
                MyIP.info
                <br />© {new Date().getFullYear()}
              </Link>
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
