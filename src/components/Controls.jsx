import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Button from './Button'

/*
 * @redux toppings {array}
 * @redux openForm {function}
 * @redux setTopping {function}
 */
const Controls = (props) => {

  // initialize default
  const toppings = props.toppings || []

  // set selected topping filter
  const handleChange = (e) => {
    const val = e.target.value
    props.setTopping(val)
  }

  return (
    <div className="controls">

      <Button type="button" value="Add Burger" onClick={ props.openForm } />

      <select className="controls__select form-control" 
        name="filter" onChange={ handleChange }>

        <option value="all">Choose By Topping...</option>
        { 
          toppings.map(item => <option key={item} value={item}>{ item }</option>) 
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