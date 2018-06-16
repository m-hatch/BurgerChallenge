import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Menu from './Menu'
import { fetchData } from '../util/request'

class MenuContainer extends React.Component {

  constructor() {
    super()
    this.applyFilter = this.applyFilter.bind(this)
  }

  componentDidMount() {
    fetchData(this.props.api, this.applyFilter)
  }

  componentDidUpdate(previousProps) {
    // re-fetch data if filter has changed
    if (previousProps.filter !== this.props.filter) {
      fetchData(this.props.api, this.applyFilter)
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
        item.name === this.props.filter)

      return (match.length > 0)
    })
    
    this.props.setMenu(result)
  }

  render() {
    return (
      <div className="menu">

        <Menu burgers={ this.props.burgers } />

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
)(MenuContainer)
