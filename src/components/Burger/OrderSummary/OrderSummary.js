import React, { Fragment, Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
	componentDidUpdate() {
		console.log('[OrderSummary] WillUpdate')
	}

	render(){
		const ingredientSummary = Object.keys(this.props.ingredients)
		.map(ingredientsKey => {
			return <li key={ingredientsKey}><span style={{textTransform: 'capitalize'}}>{ingredientsKey}</span>: {this.props.ingredients[ingredientsKey]}</li>
		})

		return (
			<Fragment>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>
					{ ingredientSummary }
				</ul>
				<p>Subtotal: <strong>USD {this.props.subtotal.toFixed(2)}</strong></p>
				<p>Continue to Checkout ?</p>
				<Button btnType="Danger" clicked={this.props.purchaseCanceled} >CANCEL</Button>
				<Button btnType="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>
			</Fragment>
		)
	}
}

export default OrderSummary
