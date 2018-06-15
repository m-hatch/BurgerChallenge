import React from 'react'

const createRenderer = renderFunc => (props) => (
    <div>
      <label htmlFor={ props.name }>{ props.label }</label>

      {/* input */}
      { renderFunc(props) }

      {/* error */}
      { props.meta.error && props.meta.touched && <span>{ props.meta.error }</span> }
    </div>
  )

export default createRenderer
