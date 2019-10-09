export const defaultState = {
  ipv6: "",
  failedMessage: "",
  isLoading: true,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_IPV6_VALUE": {
      const ipv6 = action.payload
      return { ...state, isLoading: false, failedMessage: "", ipv6 }
    }

    case "SET_IPV6_FAILED": {
      const failedMessage = String(action.payload)
      return { ...state, isLoading: false, ipv6: "", failedMessage }
    }

    default:
      return state
  }
}
