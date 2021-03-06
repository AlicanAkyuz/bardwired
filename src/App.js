import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'

import Landing from './components/landing/Landing'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Landing} />
      </Router>
    </Provider>
  )
}

export default App
