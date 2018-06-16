import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox'
import ReduxInput from './ReduxInput'
import ReduxSelect from './ReduxSelect'
import Button from './Button'
import validate from '../util/validate'
import { convertBool, convertJson, flattenObj } from '../util/convert'
import { postData, putData } from '../util/request'

class BurgerForm extends React.Component {

  constructor(props) {
    super(props)
    this.populateForm = this.populateForm.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.method !== this.props.method) {
      this.props.method === 'PUT' ? this.populateForm() : this.resetForm()
    }
  }

  populateForm() {
    const data = this.props.burgers.filter(
      burger => burger.id === this.props.formId
    )[0]
    data.toppings = flattenObj(data.toppings)
    this.props.initialize(data)
  }

  resetForm() {
    this.props.initialize(this.props.initVal)
  }

  onSubmit(values) {
    const data = {
      "id": values.id,
      "name": values.name,
      "has_bun": convertBool(values.has_bun),
      "has_patty": convertBool(values.has_patty),
      "toppings": convertJson(values.toppings)
    }

    if (this.props.method === 'POST') {
      postData(this.props.url, data, this.props.setMenu)
    }

    if (this.props.method === 'PUT') {
      //alert(values.id)
      putData(this.props.url, values.id, data, this.props.setMenu)
    }

    this.props.closeForm()
  }

  getOptions() {
    return [
      <option key="Yes" value="Yes">Yes</option>,
      <option key="No" value="No">No</option>
    ]
  }

  render() {
    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        
        { this.props.method === 'PUT' && <Field component={ ReduxInput } name="id" label="ID" /> }

        <Field component={ ReduxInput } name="name" label="Name" />
        
        <Field component={ ReduxSelect } name="has_bun" label="Has Bun">
          { this.getOptions() }
        </Field>

        <Field component={ ReduxSelect } name="has_patty" label="Has Patty">
          { this.getOptions() }
        </Field>

        <div className="checkboxes">
          <div className="checkboxes__label">Toppings</div>
          <Field component={ ReduxCheckbox(Checkboxes) } name="toppings" data={ this.props.toppings } />
        </div>

        <Button type="submit" value="Submit" />

      </form>
    )
  }

}

// app state operations
const mapStateToProps = (state) => {
  return {
    toppings: state.app.toppings.values,
    burgers: state.menu.burgers,
    initVal: state.app.initialValues,
    method: state.modal.formMethod,
    formId: state.modal.formId,
    url: state.app.api
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeForm: () => {
      dispatch(actions.showModal(false))
      dispatch(actions.setMethod(''))
      dispatch(actions.setFormId(null))
    },
    setMenu: (burgers) => {
      dispatch(actions.setMenu(burgers))
    }
  }
}

// map app state to component
BurgerForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(BurgerForm)

// map form state to component
export default reduxForm({
  form: 'burgers',
  validate
})(BurgerForm)
