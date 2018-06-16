import React from 'react'

const createRenderer = component => (props) => (
    <div className={ (props.meta.error && props.meta.touched) ? 
      `${props.className} has-error` : props.className }>
      
      <label htmlFor={ props.name }>{ props.label }</label>

      {/* input */}
      { component(props) }

      {/* error */}
      { props.meta.error && props.meta.touched 
        && <span className="form__msg">{ props.meta.error }</span> }

    </div>
  )

export default createRenderer
