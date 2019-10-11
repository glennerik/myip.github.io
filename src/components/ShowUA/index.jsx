import React from "react"
import ShowUserAgentString from "./ShowUserAgentString/"
import ShowBrowserName from "./ShowBrowserName"
import ShowDeviceType from "./ShowDeviceType"

export default () => (
  <>
    <ShowUserAgentString className="tag is-dark is-large" />
    <ShowBrowserName className="tag is-dark is-large" />
    <ShowDeviceType className="tag is-dark is-large" />
  </>
)
