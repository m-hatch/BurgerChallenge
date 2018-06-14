import React from 'react'
import Button from './Button'

export default (props) => {
  return (
    <div className="menu">

<table className="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Bun</th>
      <th>Patty</th>
      <th>Toppings</th>
      <th>Edit/Delete</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>&#10004;</td>
      <td>&#10004;</td>
      <td>stuff</td>
      <td>
        <a href="">Edit</a>&nbsp;
        <a href="">Delete</a>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>&#10004;</td>
      <td></td>
      <td>stuff stuff  stuff  stuff  stuff  stuff stuff </td>
      <td>
        <a href="">Edit</a>&nbsp;
        <a href="">Delete</a>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td></td>
      <td>&#10004;</td>
      <td>stuff</td>
      <td>
        <a href="">Edit</a>&nbsp;
        <a href="">Delete</a>
      </td>
    </tr>
  </tbody>
</table>


    </div>
  )
}
