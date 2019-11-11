import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(ingredientsKey => {
			return <li key={ingredientsKey}><span style={{textTransform: 'capitalize'}}>{ingredientsKey}</span>: {props.ingredients[ingredientsKey]}</li>
		})

	return (
		<Fragment>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ ingredientSummary }
			</ul>
			<p>Subtotal: <strong>USD {props.subtotal.toFixed(2)}</strong></p>
			<p>Continue to Checkout ?</p>
			<Button btnType="Danger" clicked={props.purchaseCanceled} >CANCEL</Button>
			<Button btnType="Success" clicked={props.purchaseContinued} >CONTINUE</Button>
		</Fragment>
	)
}

export default OrderSummary