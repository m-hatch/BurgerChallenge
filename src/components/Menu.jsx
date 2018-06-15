import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Button from './Button'

const fetchData = (url, callback) => {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(res => console.log(res))
}

class Menu extends React.Component {

  constructor() {
    super()
    this.getBurgers = this.getBurgers.bind(this)
  }

  componentDidMount() {
    fetchData(this.props.api, this.props.setMenu)
  }

  getToppings(list) {
    return list.map((topping, i, arr) => 
      (i < arr.length - 1) ? `${topping.name}, ` : topping.name)
  }

  getBurgers() {
    return this.props.burgers.map(burger => {
      return (
        <tr key={ burger.id }>
          <th>{ burger.id }</th>
          <td>{ burger.name }</td>
          <td>{ burger.has_bun && <span>&#10004;</span>}</td>
          <td>{ burger.has_patty && <span>&#10004;</span>}</td>
          <td>{ this.getToppings(burger.toppings) }</td>
          <td>
            <a href="">Edit</a>&nbsp;
            <a href="">Delete</a>
          </td>
        </tr>
      )
    })
  }

  render() {
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
            { this.getBurgers() }
          </tbody>
        </table>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    api: state.app.api,
    burgers: state.menu.burgers,
    filter: state.app.toppings.selected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMenu: (burgers) => {
      dispatch(actions.setMenu(burgers))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)