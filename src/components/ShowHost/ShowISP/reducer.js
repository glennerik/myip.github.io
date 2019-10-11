export const defaultState = {
  isp: "",
  failedMessage: "",
  isLoading: true,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_ISP_VALUE": {
      const isp = action.payload
      return { ...state, isLoading: false, failedMessage: "", isp }
    }

    case "SET_ISP_FAILED": {
      const failedMessage = String(action.payload)
      return { ...state, isLoading: false, isp: "", failedMessage }
    }

    default:
      return state
  }
}
