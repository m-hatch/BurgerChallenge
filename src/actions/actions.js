import * as types from './types';

// action creators
export function showModal(isVisible) {
  return { type: types.SHOW_MODAL, isVisible};
}
