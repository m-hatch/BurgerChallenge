import React from 'react'

/* 
 * @props burgers {array}
 */
export default (props) => {
  const getToppings = (toppings) => {
    return toppings.map((topping, i, arr) => 
      (i < arr.length - 1) ? `${topping.name}, ` : topping.name)
  }

  const getBurgers = () => {
    return props.burgers.map(burger => {
      return (
        <tr key={ burger.id }>
          <th>{ burger.id }</th>
          <td>{ burger.name }</td>
          <td>{ burger.has_bun && <span>&#10004;</span>}</td>
          <td>{ burger.has_patty && <span>&#10004;</span>}</td>
          <td>{ getToppings(burger.toppings) }</td>
          <td>
            <a href="" onClick={ (e) => props.onClick(e, 'edit', burger.id) }>Edit</a>&nbsp;
            <a href="" onClick={ (e) => props.onClick(e, 'delete', burger.id) }>Delete</a>
          </td>
        </tr>
      )
    })
  }

  // render
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
        { getBurgers() }
      </tbody>
    </table>
  )
}
