import React from 'react'
import Header from './Header'
import Controls from './Controls'
import MenuContainer from './MenuContainer'
import ModalContainer from './ModalContainer'

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <Controls />
      <MenuContainer />
      <ModalContainer />
    </div>
  )
}

export default App
