export const defaultState = {
  browsername: "",
  failedMessage: "",
  isLoading: true,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_BROWSER-NAME_VALUE": {
      const browsername = action.payload
      return { ...state, isLoading: false, failedMessage: "", browsername }
    }

    case "SET_BROWSER-NAME_FAILED": {
      const failedMessage = String(action.payload)
      return { ...state, isLoading: false, browsername: "", failedMessage }
    }

    default:
      return state
  }
}
