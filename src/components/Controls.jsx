import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Button from './Button'

/*
 * @redux openForm {function}
 */
const Controls = (props) => {
  return (
    <div className="controls">

      <Button type="button" value="Add Burger" onClick={ props.openForm } />

      <select className="controls__select form-control" name="" id="">
        <option value="">Choose By Topping...</option>
        <option value="">first</option>
        <option value="">second</option>
      </select>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    openForm: () => {
      dispatch(actions.showModal(true))
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Controls)