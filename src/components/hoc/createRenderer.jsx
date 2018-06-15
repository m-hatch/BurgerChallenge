import React from 'react'

const createRenderer = renderFunc => 
  ({ input, meta, name, label, children }) => 
    <div>

      <label htmlFor={ name }>{ label }</label>

      {/* input */}
      { renderFunc(input, meta, children) }

      {/* error */}
      { meta.error && meta.touched && <span>{ meta.error }</span> }

    </div>

export default createRenderer
