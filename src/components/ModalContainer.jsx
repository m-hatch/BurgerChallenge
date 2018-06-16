import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import BurgerForm from './BurgerForm'
import { convertBool, convertJson } from '../util/convert'
import { postData } from '../util/request'

class ModalContainer extends React.Component {

	constructor(props) {
		super(props)
		this.handleOutsideClick = this.handleOutsideClick.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleOutsideClick(e) {
		if(e.target == this.refs.modal) {
			this.props.closeForm()
		}
	}

	handleSubmit(values) {
		const data = {
			"id": values.id,
	    "name": values.name,
	    "has_bun": convertBool(values.has_bun),
	    "has_patty": convertBool(values.has_patty),
	    "toppings": convertJson(values.toppings)
		}
		postData(this.props.url, data, this.props.setMenu)
		alert('submitted')
		this.props.closeForm()
	}

	render() {
		return (
			<div ref="modal"
				className={ this.props.showModal ? "modal modal--open" : "modal" } 
				onClick={ this.handleOutsideClick }>

				<div className="dialog">

					<div>
						<span className="dialog__btn" onClick={ this.props.closeForm }>&times;</span>
						<h3 className="dialog__heading">Add A Burger</h3>
					</div>

					<BurgerForm method={ this.props.method } onSubmit={ this.handleSubmit } />

				</div>

			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		showModal: state.modal.showModal,
		method: state.modal.method,
		url: state.app.api
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		closeForm: () => {
			dispatch(actions.showModal(false))
		},
		setMenu: (burgers) => {
      dispatch(actions.setMenu(burgers))
    }
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalContainer)
