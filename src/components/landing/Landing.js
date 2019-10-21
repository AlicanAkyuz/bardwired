import React, { useState, useEffect } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { test } from '../../actions/session/actions'
import Home from './components/Home'

function Landing({ test, session: { testMsg } }) {
  //const [testStr, setTestStr] = useState(null)
  // useEffect(() => {
  //   test()
  //   setTestStr(testMsg)
  // }, [test, testMsg])
  return <Home testStr={'the spectacle before us was indeed sublime'} />
}

Landing.propTypes = {
  test: func.isRequired
}

export default connect(
  state => ({ session: state.session }),
  { test }
)(Landing)
