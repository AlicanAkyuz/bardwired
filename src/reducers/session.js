import * as types from '../actions/session/types'

const initialState = {
  isAuth: false,
  authErr: false,
  loading: false,
  language: 'english'
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_AUTH:
      return {
        ...state,
        isAuth: payload
      }
    default:
      return state
  }
}
