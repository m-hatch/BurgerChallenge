import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import BurgerForm from './BurgerForm'

class ModalContainer extends React.Component {

	constructor(props) {
		super(props)
		this.handleOutsideClick = this.handleOutsideClick.bind(this)
	}

	handleOutsideClick(e) {
		if(e.target == this.refs.modal) {
			this.props.closeForm()
		}
	}

	getTitle() {
		return this.props.method === 'POST' ? 'Add A Burger' : 'Edit A Burger'
	}

	render() {
		return (
			<div ref="modal"
				className={ this.props.showModal ? "modal modal--open" : "modal" } 
				onClick={ this.handleOutsideClick }>

				<div className="dialog">

					<div>
						<span className="dialog__btn" onClick={ this.props.closeForm }>&times;</span>
						<h3 className="dialog__heading">{ this.getTitle() }</h3>
					</div>

					<BurgerForm />

				</div>

			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		showModal: state.modal.showModal,
		method: state.modal.formMethod
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		closeForm: () => {
			dispatch(actions.showModal(false))
			dispatch(actions.setMethod(''))
			dispatch(actions.setFormId(null))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalContainer)
