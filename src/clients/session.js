import axios from 'axios'
import { root } from '../config/root'

export const test = async () => {
  const uri = `${root}/api/users/test`
  return axios.get(uri).then(value => {
    if (value.data !== null && value.data.msg !== null) {
      return value.data.msg
    } else {
      throw new Error('API returned nothing')
    }
  })
}
