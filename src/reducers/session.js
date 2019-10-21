import * as types from '../actions/session/types'

const initialState = {
  testMsg: null,
  error: {
    testErr: false,
    errMsg: null
  }
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.TEST:
      return {
        ...state,
        testMsg: payload
      }
    case types.TEST_ERR:
      return {
        ...state,
        error: {
          testErr: payload.bool,
          errMsg: payload.msg
        }
      }
    default:
      return state
  }
}
