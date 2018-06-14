import React from 'react'

/*
 * @props onClick {function}
 * @props type {string}
 * @props value {string/element}
 */
export default (props) => {
  return (
    <button className="button" type={ props.type } onClick={ props.onClick }>
      { props.value }
    </button>
  )
}
