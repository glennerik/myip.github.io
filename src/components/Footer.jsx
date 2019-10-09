import React from "react"
import { Link } from "gatsby"

export default () => (
  <footer className="navbar is-fixed-bottom has-text-right">
    <Link to="/" className="has-margin-right-20 has-margin-left-20">
      MyIP.info © {new Date().getFullYear()}
    </Link>
  </footer>
)
