import * as types from './types';

// action creators
export function setTopping(topping) {
  return { type: types.SET_TOPPING, topping};
}

export function showModal(isVisible) {
  return { type: types.SHOW_MODAL, isVisible};
}
