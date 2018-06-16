import React from 'react'
import createRenderer from './hoc/createRenderer'

const ReduxSelect = ({ input, children }) => 
  <select { ...input } className="form-control">
    { children }
  </select>

 export default createRenderer(ReduxSelect)
