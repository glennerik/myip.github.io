export const defaultState = {
  metricValue: "",
  failedMessage: "",
  isLoading: true,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_METRIC_VALUE": {
      const metricValue = action.payload
      return { ...state, isLoading: false, failedMessage: "", metricValue }
    }

    case "SET_METRIC_FAILED": {
      const failedMessage = String(action.payload)
      return { ...state, isLoading: false, metricValue: "", failedMessage }
    }

    default:
      return state
  }
}
