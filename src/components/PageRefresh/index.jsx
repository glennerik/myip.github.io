import React, { useReducer } from "react"
import Helmet from "react-helmet"
import reducer, { defaultState } from "./reducer"

// ! TODO: Egen button i Drop-down => STOP refreshing
// Page refresh interval
// Only spinning / not-spinning icon (with number inside or beside) instead of "Refresh" text (on dropdown)
// color the spinner as danger if not-refreshing / black otherwise.
// title should be "Refreshing 👍" "NOT Refreshing ⚠️"
// use fontawesome.

export default () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return (
    <>
      <MetaHeader value={state.refreshValue} />
      <a className="button is-dark">Refresh</a>
    </>
  )
}

const MetaHeader = ({ value }) =>
  !value ? null : (
    <Helmet>
      <meta httpEquiv="refresh" content={parseInt(value, 10)} />
    </Helmet>
  )
