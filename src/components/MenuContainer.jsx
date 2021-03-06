import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Menu from './Menu'
import { fetchData, deleteData } from '../util/request'

class MenuContainer extends React.Component {

  constructor() {
    super()
    this.applyFilter = this.applyFilter.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetchData(this.applyFilter)
  }

  componentDidUpdate(previousProps) {
    // re-fetch data if filter has changed
    if (previousProps.filter !== this.props.filter) {
      fetchData(this.applyFilter)
    }
  }

  applyFilter(list) {
    const topping = this.props.filter

    // return everything
    if (topping === 'all') {
      this.props.setMenu(list)
      return
    }

    // return filtered result
    const result = list.filter(burger => {
      const match = burger.toppings.filter(item => 
        item.name === topping)

      return (match.length > 0)
    })
    
    this.props.setMenu(result)
  }

  handleClick(e, method, id) {
    e.preventDefault()

    if (method === 'edit') {
      // open form with method and id
      this.props.openForm('PUT', id)
    }

    if (method === 'delete') {
      // send warning and delete
      let agree = confirm(`Are you sure you want to delete burger: ${id}?`)

      if (agree) {
        deleteData(id, this.props.setMenu)
      }
    }
  }

  render() {
    return (
      <div className="menu">

        <Menu burgers={ this.props.burgers } onClick={ this.handleClick } />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    burgers: state.menu.burgers,
    filter: state.app.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMenu: (burgers) => {
      dispatch(actions.setMenu(burgers))
    },
    openForm: (method, id) => {
      dispatch(actions.setMethod(method))
      dispatch(actions.setFormId(id))
      dispatch(actions.showModal(true))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer)
