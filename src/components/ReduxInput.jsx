import React from 'react'
import createRenderer from './hoc/createRenderer'

const ReduxInput = ({ input, readOnly }) => 
  <input { ...input } className="form-control" readOnly={ readOnly } />

export default createRenderer(ReduxInput)
