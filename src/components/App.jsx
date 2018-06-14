import React from 'react'
import { connect } from 'react-redux'

const App = (props) => {
  return (
    <div className="app">
      Hello Burgers!
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(
  mapStateToProps
)(App)
