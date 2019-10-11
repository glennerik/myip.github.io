import React, { useReducer, useEffect } from "react"
import axios from "axios"
import reducer, { defaultState } from "./reducer"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 3000,
})

const copyBrowserName = () => {
  try {
    const copyText = document.getElementById("copyBrowserName")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
    console.log("copied", copyText.value)
    if (window.getSelection) {
      window.getSelection().removeAllRanges()
    } else if (document.selection) {
      document.selection.empty()
    }
    Toast.fire({
      type: "success",
      title: "Copied",
    })
  } catch (e) {
    console.log("Copy failed", e)
    Toast.fire({
      type: "error",
      title: "Copy Failed",
    })
  }
}

const ShowBrowserName = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  useEffect(() => {
    if (!state.browsername) {
      axios
        .get("https://browsername.myip.info")
        .then(({ data: payload }) => {
          dispatch({ type: "SET_BROWSER-NAME_VALUE", payload })
        })
        .catch(payload =>
          dispatch({ type: "SET_BROWSER-NAME_FAILED", payload })
        )
    }
  }, [state.browsername, dispatch])

  if (state.failedMessage) {
    return (
      <>
        <input
          value="Undetected"
          readOnly
          className={`${className} has-text-centered is-borderless`}
        />
        <p className="help">{state.failedMessage}</p>
      </>
    )
  }

  if (state.isLoading) {
    return (
      <>
        <span className={`${className} button is-loading`}>
          Detecting Browser Name...
        </span>
        <p className="help">
          Detecting Browser Name
          <noscript> (requires JavaScript)</noscript>
          &hellip;
        </p>
      </>
    )
  }

  return (
    <>
      <input
        id="copyBrowserName"
        value={state.browsername}
        readOnly
        onClick={copyBrowserName}
        className={`${className} has-text-centered has-cursor-pointer is-borderless`}
        title="Click to copy"
      />
      <p className="help">click to copy</p>
    </>
  )
}

export default ({ className }) => {
  return (
    <div className="field">
      <label className="label">Browser Name</label>
      <div className="control has-text-centered">
        <ShowBrowserName className={className} />
      </div>
    </div>
  )
}
