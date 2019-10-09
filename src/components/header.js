import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./image"

// make a css navbar
// https://bulma.io/documentation/components/navbar/

const Header = ({ siteTitle }) => (
  <header>
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div
          className="navbar-item"
          style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
        >
          <Logo />
        </div>

        <Link to="/" className="navbar-item">
          {siteTitle}
        </Link>

        <button
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
