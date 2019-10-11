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

const copyISP = () => {
  try {
    const copyText = document.getElementById("copyISP")
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

const ShowISP = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  useEffect(() => {
    if (!state.isp) {
      axios
        // .get("https://isp.myip.info") // could 302 to `//ipinfo.io/${ip}/org`
        .get("https://ipinfo.io/org")
        .then(({ data: payload }) => {
          dispatch({ type: "SET_ISP_VALUE", payload })
        })
        .catch(payload => dispatch({ type: "SET_ISP_FAILED", payload }))
    }
  }, [state.isp, dispatch])

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
          Detecting your Internet Service Provider...
        </span>
        <p className="help">
          Detecting your Internet Service Provider
          <noscript> (requires JavaScript)</noscript>
          &hellip;
        </p>
      </>
    )
  }

  return (
    <>
      <input
        id="copyISP"
        value={state.isp}
        readOnly
        onClick={copyISP}
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
      <label className="label">Your Internet Service Provider</label>
      <div className="control has-text-centered">
        <ShowISP className={className} />
      </div>
    </div>
  )
}
