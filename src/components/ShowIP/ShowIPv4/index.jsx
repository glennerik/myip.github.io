import React, { useReducer, useEffect } from "react"
import axios from "axios"
import reducer, { defaultState } from "./reducer"
import Swal from "sweetalert2"

// ! TODO: Input Link ADDON to Position (see your position = with link to iplocation)

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 3000,
})

const copyIpv4 = () => {
  try {
    const copyText = document.getElementById("copyIpv4")
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

const IPv4 = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  useEffect(() => {
    if (!state.ipv4) {
      axios
        .get("https://ipv4.myip.info")
        .then(({ data: payload }) => {
          dispatch({ type: "SET_IPV4_VALUE", payload })
        })
        .catch(payload => dispatch({ type: "SET_IPV4_FAILED", payload }))
    }
  }, [state.ipv4, dispatch])

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
          Detecting IPv4 address...
        </span>
        <p className="help">
          Detecting IPv4 address
          <noscript> (requires JavaScript)</noscript>
          &hellip;
        </p>
      </>
    )
  }

  return (
    <>
      <input
        id="copyIpv4"
        value={state.ipv4}
        readOnly
        onClick={copyIpv4}
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
      <label className="label">IPv4</label>
      <div className="control has-text-centered">
        <IPv4 className={className} />
      </div>
    </div>
  )
}
