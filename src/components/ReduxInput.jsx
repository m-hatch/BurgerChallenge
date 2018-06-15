import React from 'react'
import createRenderer from './hoc/createRenderer'

const ReduxInput = ({ input, meta }) => 
  <input { ...input } className={ (meta.error && meta.touched) ? 'form-control error' : 'form-control' } />

export default createRenderer(ReduxInput)
