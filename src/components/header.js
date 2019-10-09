import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Logo } from "./Images"

// make a css navbar
// https://bulma.io/documentation/components/navbar/

const Header = ({ siteTitle }) => (
  <header>
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <Link
        to="/"
        className="navbar-item"
        className="navbar-brand"
        title="MyIP.info"
      >
        <div className="image is-64x64">
          <Logo />
        </div>
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
