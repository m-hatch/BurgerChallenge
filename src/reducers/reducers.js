import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as types from '../actions/types'
import * as init from './defaults'

// reducers
function app(state = init.app, action) {
  switch(action.type) {
    case types.SET_MAIN_CONTENT:
      return Object.assign(
        {}, state, { content: action.data }
      );
    default:
      return state;
  }
}

function modal(state = init.modal, action) {
  switch(action.type) {
    case types.SHOW_MODAL:
      return Object.assign(
        {}, state, { showModal: action.isVisible }
      )
    case types.SET_FORM_COMPLETED:
      return Object.assign(
        {}, state, { isComplete: action.isComplete }
      )
    default:
      return state
  }
}

// combine reducers
export default combineReducers({
  app,
  modal,
  form: formReducer
})
