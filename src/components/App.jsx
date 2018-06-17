import React from 'react'
import Header from './Header'
import Controls from './Controls'
import MenuContainer from './MenuContainer'
import ModalContainer from './ModalContainer'
import Footer from './Footer'


export default () => {
  return (
    <div className="app">
      <Header />
      <Controls />
      <MenuContainer />
      <ModalContainer />
      <Footer />
    </div>
  )
}
