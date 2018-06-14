import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Controls from './Controls'

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <Controls />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(
  mapStateToProps
)(App)
