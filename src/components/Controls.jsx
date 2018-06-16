import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Button from './Button'

const Controls = (props) => {

  // open form with method set to POST
  const handleClick = (e) => {
    props.setMethod('POST')
    props.openForm()
  }

  // set selected topping filter
  const handleChange = (e) => {
    const val = e.target.value
    props.setTopping(val)
  }

  return (
    <div className="controls">

      <Button type="button" value="Add Burger" onClick={ handleClick } />

      <select className="controls__select form-control" 
        name="filter" onChange={ handleChange }>

        <option value="all">Choose By Topping...</option>
        { 
          props.toppings.map(item => <option key={item} value={item}>{ item }</option>) 
        }

      </select>
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    toppings: state.app.toppings.values
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMethod: (method) => {
      dispatch(actions.setMethod(method))
    },
    openForm: () => {
      dispatch(actions.showModal(true))
    },
    setTopping: (topping) => {
      dispatch(actions.setTopping(topping))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)