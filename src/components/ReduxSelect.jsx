import React from 'react'
import createRenderer from './hoc/createRenderer'

const ReduxSelect = (input, meta, children) => 
  <select { ...input } className={ meta.error && meta.touched ? 'error' : '' }>
    { children }
  </select>

 export default createRenderer(ReduxSelect)
