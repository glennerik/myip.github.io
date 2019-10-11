import React from "react"
import Helmet from "react-helmet"
import { useLocalStorageReducer } from "react-storage-hooks"
import reducer, { defaultState } from "./reducer"
import refreshIntervals from "./refreshIntervals"

// Only spinning / not-spinning icon (with number inside or beside) instead of "Refresh" text (on dropdown)
// title should be "Refreshing 👍" "NOT Refreshing ⚠️"

/* eslint-disable jsx-a11y/anchor-is-valid */

export default () => {
  const [state, dispatch] = useLocalStorageReducer(
    "refreshInterval",
    reducer,
    defaultState
  )
  return (
    <>
      <MetaHeader state={state} />
      <DropDown state={state} dispatch={dispatch} />
    </>
  )
}

const MetaHeader = ({ state }) =>
  state.refreshInterval === -1 || state.ddOpen ? null : (
    <Helmet>
      <meta
        httpEquiv="refresh"
        content={String(parseInt(state.refreshInterval, 10))}
      />
    </Helmet>
  )

const DropDown = props => {
  return (
    <div
      className={`dropdown  is-right ${props.state.ddOpen ? "is-active" : ""}`}
    >
      <div className="dropdown-trigger">
        <button
          className={`button ${
            props.state.refreshInterval === -1 ? "is-warning" : "is-dark"
          }`}
          onClick={() => props.dispatch({ type: "TOGGLE_OPEN" })}
          aria-haspopup="true"
          aria-controls="refresh-dropdown-menu"
        >
          <span className="icon">
            <i
              className={`fas fa-sync-alt ${
                props.state.ddOpen ? "fa-spin" : ""
              }`}
            />
          </span>
          <span>
            {refreshIntervals
              .filter(i => i.payload === props.state.refreshInterval)
              .map(i => i.shortName)}
          </span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="refresh-dropdown-menu" role="menu">
        <div className="dropdown-content">
          <DropDownItems {...props} />
        </div>
      </div>
    </div>
  )
}

const DropDownItems = ({ state, dispatch }) => (
  <>
    <div className="dropdown-item">
      <p>
        Set the page <b>refresh</b> interval
      </p>
    </div>
    <hr className="dropdown-divider" />
    {refreshIntervals.map(({ payload, name }) => (
      <a
        key={payload}
        href="#"
        className={`dropdown-item ${
          payload === state.refreshInterval ? "is-active" : ""
        }`}
        onClick={() => dispatch({ type: "SET_REFRESH_INTERVAL", payload })}
      >
        {name}
      </a>
    ))}
    <hr className="dropdown-divider" />
    <a
      href=""
      className={`dropdown-item ${
        -1 === state.refreshInterval ? "is-active" : ""
      }`}
      onClick={() => dispatch({ type: "SET_REFRESH_INTERVAL", payload: -1 })}
    >
      {state.refreshInterval === -1 ? "Not" : "Stop"} refreshing
    </a>
  </>
)
