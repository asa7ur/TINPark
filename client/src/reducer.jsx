import {
  SELECT_ZONE,
  CHANGE_STATE,
  SET_VEHICLE,
  SET_VIEWPORT_HEIGHT,
} from './actions'

const globalReducer = (state, action) => {
  switch (action.type) {
    case SELECT_ZONE:
      return {
        ...state,
        selectedZone: action.payload,
        isModalOpen: false,
        modalType: null,
      }
    case CHANGE_STATE:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        modalType: action.payload,
      }
    case SET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
      }
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
