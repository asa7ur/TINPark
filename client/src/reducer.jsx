import {
  SET_VIEWPORT_HEIGHT,
} from './actions'

const globalReducer = (state, action) => {
  switch (action.type) {
    case SET_VIEWPORT_HEIGHT:
      return {
        ...state,
        viewportHeight: action.payload,
      }
    default:
      throw new Error(`No matching "${action.type}" - action type`)
  }
}

export default globalReducer
