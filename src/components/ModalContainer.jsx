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

	handleSubmit(values) {
		// Do something with the form values
		console.log(values)
		alert('submitted')
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

					{ 
						this.props.completed && 
						<div>
							<p className="dialog__confirm">Your request has been sent!</p>
						</div>
					}

					<BurgerForm onSubmit={ this.handleSubmit } 
						initData ={ this.props.data } />

				</div>

			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		showModal: state.modal.showModal,
		isComplete: state.modal.isComplete,
		data: state.main.testData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		closeForm: () => {
			dispatch(actions.showModal(false))
		},
		completeForm: () => {
			dispatch(actions.setFormCompleted(true))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalContainer)
