import React from 'react'

const getToppings = (toppings) => {
  return toppings.map((topping, i, arr) => 
    (i < arr.length - 1) ? `${topping.name}, ` : topping.name)
}

const getBurgers = (burgers) => {
  return burgers.map(burger => {
    return (
      <tr key={ burger.id }>
        <th>{ burger.id }</th>
        <td>{ burger.name }</td>
        <td>{ burger.has_bun && <span>&#10004;</span>}</td>
        <td>{ burger.has_patty && <span>&#10004;</span>}</td>
        <td>{ getToppings(burger.toppings) }</td>
        <td>
          <a href="">Edit</a>&nbsp;
          <a href="">Delete</a>
        </td>
      </tr>
    )
  })
}

/* 
 * @props burgers {array}
 */
export default (props) => {
  return (
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
        { getBurgers(props.burgers) }
      </tbody>
    </table>
  )
}
