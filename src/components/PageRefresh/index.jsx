import React, { useReducer } from "react"
import Helmet from "react-helmet"
import reducer, { defaultState } from "./reducer"

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
