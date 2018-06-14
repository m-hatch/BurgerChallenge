import React from 'react'
import Header from './Header'
import Controls from './Controls'
import Menu from './Menu'

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <Controls />
      <Menu />
    </div>
  )
}

export default App
