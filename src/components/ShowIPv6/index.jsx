import React, { useReducer, useEffect } from "react"
import axios from "axios"
import reducer, { defaultState } from "./reducer"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
})

const copyIpv6 = () => {
  try {
    const copyText = document.getElementById("copyIpv6")
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

const IPv6 = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  useEffect(() => {
    if (!state.ipv6) {
      axios
        .get("https://ipv6.myip.info")
        .then(({ data: payload }) => {
          dispatch({ type: "SET_IPV6_VALUE", payload })
        })
        .catch(payload => dispatch({ type: "SET_IPV6_FAILED", payload }))
    }
  }, [state.ipv6, dispatch])

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
          Detecting IPv6 address...
        </span>
        <p className="help">Detecting IPv6 address...</p>
      </>
    )
  }

  return (
    <>
      <input
        id="copyIpv6"
        value={state.ipv6}
        readOnly
        onClick={copyIpv6}
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
      <label className="label">IPv6</label>
      <div className="control has-text-centered">
        <IPv6 className={className} />
      </div>
    </div>
  )
}
