import * as types from './types'
import * as clients from '../../clients/session'

export const test = () => async dispatch => {
  try {
    const res = await clients.test()
    dispatch({ type: types.TEST, payload: res })
  } catch (err) {
    dispatch({ type: types.TEST_ERR, payload: { bool: true, msg: 'Problem.' } })
  }
}
