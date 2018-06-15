import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ReduxInput from './ReduxInput'
import ReduxSelect from './ReduxSelect'
import Button from './Button'

const validate = values => {
  const errors = {}
  if (!values.id) {
    errors.id = 'Required'
  }
  if (!values.name) {
    errors.name = 'Required'
  }
  return errors
}

const thereIsNoTry = [
  <option key="Yes" value="Yes">Yes</option>,
  <option key="No" value="No">No</option>
]

const BurgerForm = (props) => {

  const handleEdit = () => props.initialize(props.initData)

  //handleEdit()

  return (
    <form onSubmit={ props.handleSubmit(props.onSubmit) }>
      
      <Field component={ ReduxInput } name="id" label="ID"/>

      <Field component={ ReduxInput } name="name" label="Name"/>
      
      <Field component={ ReduxSelect } name="has_bun" label="Has Bun">
        { thereIsNoTry }
      </Field>

      <Field component={ ReduxSelect } name="has_patty" label="Has Patty">
        { thereIsNoTry }
      </Field>

      <Button type="button" value="Submit" onClick={ handleEdit } />

    </form>
  )

}

export default reduxForm({
  form: 'burgers',
  initialValues: {
    has_bun: 'Yes',
    has_patty: 'Yes'
  },
  validate
})(BurgerForm);
