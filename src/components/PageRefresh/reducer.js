export const defaultState = {
  refreshInterval: 600,
  ddOpen: false,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_REFRESH_INTERVAL": {
      const refreshInterval = action.payload
      return {
        ...state,
        ddOpen: false,
        refreshInterval,
      }
    }
    case "TOGGLE_OPEN": {
      return { ...state, ddOpen: !state.ddOpen }
    }
    default:
      return state
  }
}
