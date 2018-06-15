import React from 'react'
import createRenderer from './hoc/createRenderer'

const ReduxInput = (input, meta) => 
  <input { ...input } className={ meta.error && meta.touched ? 'error' : '' } />

export default createRenderer(ReduxInput)
