export const defaultState = {
  devicetype: "",
  failedMessage: "",
  isLoading: true,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_DEVICE-TYPE_VALUE": {
      const devicetype = action.payload
      return { ...state, isLoading: false, failedMessage: "", devicetype }
    }

    case "SET_DEVICE-TYPE_FAILED": {
      const failedMessage = String(action.payload)
      return { ...state, isLoading: false, devicetype: "", failedMessage }
    }

    default:
      return state
  }
}
