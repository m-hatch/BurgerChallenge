import React from 'react'
import Header from './Header'
import Controls from './Controls'
import Menu from './Menu'
import ModalContainer from './ModalContainer'

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <Controls />
      <Menu />
      <ModalContainer />
    </div>
  )
}

export default App
