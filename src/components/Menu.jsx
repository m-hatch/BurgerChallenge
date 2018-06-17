import React from 'react'

export default ({ burgers, onClick }) => {

  const getToppings = (toppings) => {
    return toppings.map((topping, i, arr) => 
      (i < arr.length - 1) ? `${topping.name}, ` : topping.name)
  }

  const getBurgers = () => {
    return burgers.map(burger => {
      return (
        <tr key={ burger.id }>
          <th>{ burger.id }</th>
          <td>{ burger.name }</td>
          <td>{ burger.has_bun && <span>&#10004;</span>}</td>
          <td>{ burger.has_patty && <span>&#10004;</span>}</td>
          <td>{ getToppings(burger.toppings) }</td>
          <td>
            <a href="" onClick={ (e) => onClick(e, 'edit', burger.id) }>Edit</a>&nbsp;
            <a href="" onClick={ (e) => onClick(e, 'delete', burger.id) }>Delete</a>
          </td>
        </tr>
      )
    })
  }

  // render
  return (
    <div className="table-wrapper">

      <table className="table">
        <thead className="table__head">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Bun</th>
            <th>Patty</th>
            <th>Toppings</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>

        <tbody className="table__body">
          { getBurgers() }
        </tbody>
      </table>
      
    </div>
  )
}
