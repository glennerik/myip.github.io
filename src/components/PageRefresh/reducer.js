export const defaultState = {
  refreshValue: 60,
}

export default (state, action) => {
  switch (action.type) {
    case "SET_REFRESH_VALUE": {
      const refreshValue = action.payload
      return {
        ...state,
        refreshValue,
      }
    }
    default:
      return state
  }
}
