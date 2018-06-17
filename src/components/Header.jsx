import React from 'react'
import { connect } from 'react-redux'

const Header = ({ url, title, subtitle }) => {
  return (
    <div className="header">

      <div className="header__logo">
        <img className="header__img" src={ url } />
      </div>

      <h1 className="header__title">{ title }</h1>
      <h2 className="header__subtitle">{ subtitle }</h2>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    url: state.app.header.img,
    title: state.app.header.title,
    subtitle: state.app.header.subtitle
  }
}

export default connect(
  mapStateToProps
)(Header)
