import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as types from '../actions/types'
import * as init from './defaults'

// reducers
function app(state = init.app, action) {
  switch(action.type) {

    case types.SET_TOPPING:
      return Object.assign(
        {}, state, { filter: action.topping }
      )

    default:
      return state
  }
}

function menu(state = init.menu, action) {
  switch(action.type) {

    case types.SET_MENU:
      return Object.assign(
        {}, state, { burgers: action.burgers }
      )

    default:
      return state
  }
}

function modal(state = init.modal, action) {
  switch(action.type) {

    case types.SHOW_MODAL:
      return Object.assign(
        {}, state, { showModal: action.isVisible }
      )

    case types.SET_METHOD:
      return Object.assign(
        {}, state, { formMethod: action.method }
      )

    case types.SET_FORM_ID:
      return Object.assign(
        {}, state, { formId: action.id }
      )

    default:
      return state
  }
}

// combine reducers
export default combineReducers({
  app,
  menu,
  modal,
  form: formReducer
})
