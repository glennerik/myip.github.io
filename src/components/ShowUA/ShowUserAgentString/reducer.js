export const defaultState = {
  useragent: "",
  failedMessage: "",
  isLoading: true,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_USER-AGENT_VALUE": {
      const useragent = action.payload
      return { ...state, isLoading: false, failedMessage: "", useragent }
    }

    case "SET_USER-AGENT_FAILED": {
      const failedMessage = String(action.payload)
      return { ...state, isLoading: false, useragent: "", failedMessage }
    }

    default:
      return state
  }
}
