import React from 'react'
import createRenderer from './hoc/createRenderer'

const ReduxInput = ({ input, meta, readOnly }) => 
  <input { ...input } 
    className={ (meta.error && meta.touched) ? 'form-control error' : 'form-control' } 
    readOnly={ readOnly } />

export default createRenderer(ReduxInput)
