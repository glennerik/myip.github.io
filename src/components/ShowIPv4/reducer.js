export const defaultState = {
  ipv4: "",
  failedMessage: "",
  isLoading: true,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_IPV4_VALUE": {
      const ipv4 = action.payload
      return { ...state, isLoading: false, failedMessage: "", ipv4 }
    }

    case "SET_IPV4_FAILED": {
      const failedMessage = String(action.payload)
      return { ...state, isLoading: false, ipv4: "", failedMessage }
    }

    default:
      return state
  }
}
