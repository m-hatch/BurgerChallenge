import React from 'react'
import createRenderer from './hoc/createRenderer'

const ReduxSelect = (input, meta, children) => 
  <select { ...input } className={ (meta.error && meta.touched) ? 'form-control error' : 'form-control' }>
    { children }
  </select>

 export default createRenderer(ReduxSelect)
