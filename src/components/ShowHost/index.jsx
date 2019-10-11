import React from "react"
import ShowHostname from "./ShowHostname"
import ShowISP from "./ShowISP"

export default () => (
  <>
    <ShowHostname className="tag is-dark is-large" />
    <div className="has-margin-50" />
    <ShowISP className="tag is-dark is-large" />
  </>
)
