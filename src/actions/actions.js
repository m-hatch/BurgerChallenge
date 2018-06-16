import * as types from './types'

// action creators
export function setTopping(topping) {
  return { type: types.SET_TOPPING, topping}
}

export function setMenu(burgers) {
  return { type: types.SET_MENU, burgers}
}

export function showModal(isVisible) {
  return { type: types.SHOW_MODAL, isVisible}
}

export function setMethod(method) {
  return { type: types.SET_METHOD, method}
}

export function setFormId(id) {
  return { type: types.SET_FORM_ID, id}
}
