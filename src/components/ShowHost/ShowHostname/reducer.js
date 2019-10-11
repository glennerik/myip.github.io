export const defaultState = {
  hostname: "",
  failedMessage: "",
  isLoading: true,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_HOSTNAME_VALUE": {
      const hostname = action.payload
      return { ...state, isLoading: false, failedMessage: "", hostname }
    }

    case "SET_HOSTNAME_FAILED": {
      const failedMessage = String(action.payload)
      return { ...state, isLoading: false, hostname: "", failedMessage }
    }

    default:
      return state
  }
}
