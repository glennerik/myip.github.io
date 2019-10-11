import React from "react"
import ShowIpv4 from "./ShowIPv4/"
import ShowIpv6 from "./ShowIPv6/"

export default () => (
  <>
    <ShowIpv4 className="tag is-dark is-large" />
    <div className="has-margin-50" />
    <ShowIpv6 className="tag is-dark is-large" />
  </>
)
