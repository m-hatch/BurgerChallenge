import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox'
import ReduxInput from './ReduxInput'
import ReduxSelect from './ReduxSelect'
import Button from './Button'
import validate from '../util/validate'

// keep it dry
const thereIsNoTry = [
  <option key="Yes" value="Yes">Yes</option>,
  <option key="No" value="No">No</option>
]

/*
 * @props onSubmit {function}
 * @redux initData {object}
 * @redux toppings {array}
 */
let BurgerForm = (props) => {

  const handleEdit = () => props.initialize(props.initData)

  return (
    <form className="form" onSubmit={ props.handleSubmit(props.onSubmit) }>
      
      <Field component={ ReduxInput } name="id" label="ID"/>

      <Field component={ ReduxInput } name="name" label="Name"/>
      
      <Field component={ ReduxSelect } name="has_bun" label="Has Bun">
        { thereIsNoTry }
      </Field>

      <Field component={ ReduxSelect } name="has_patty" label="Has Patty">
        { thereIsNoTry }
      </Field>

      <div className="checkboxes">
        <div className="checkboxes__label">Toppings</div>
        <Field component={ ReduxCheckbox(Checkboxes) } name="toppings" data={ props.toppings } />
      </div>

      <Button type="button" value="Submit" onClick={ handleEdit } />

    </form>
  )

}

// state operations
const mapStateToProps = (state) => {
  return {
    toppings: state.app.toppings.values,
    initData: state.app.testData
  }
}

// map app state to component
BurgerForm = connect(
    mapStateToProps
)(BurgerForm)

// map form state to component
export default reduxForm({
  form: 'burgers',
  initialValues: {
    has_bun: 'Yes',
    has_patty: 'Yes'
  },
  validate
})(BurgerForm)
