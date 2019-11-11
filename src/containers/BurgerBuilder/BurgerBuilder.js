import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.8,
  meat: 1.5,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
	  purchasable: false,
	  purchasing: false,
  }

  updatePurchaseState = (ingredients) => {
	  const sum = Object.keys(ingredients)
	  	.map(ingredientsKey => {
			  return ingredients[ingredientsKey]
		  })
		  .reduce((sum, el) => {
			  return sum + el
		  }, 0)
	
		this.setState({
			purchasable: sum > 0
		})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    let updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount

    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
	this.updatePurchaseState(updatedIngredients)

  }
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if(oldCount <= 0){ //If the count is less or equal to 0 nothing happens
      return
    }
    const updatedCount = oldCount - 1
    let updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount

    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
	this.updatePurchaseState(updatedIngredients)
  }

  purchaseHandler = () => {
	  this.setState({
		  purchasing: true
	  })
  }

  hidePurchaseHandler = () => {
	  this.setState({
		  purchasing: false
	  })
  }

  purchaseContinueHandler = () => {
	  alert('You continued!')
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }


    return (
      <Fragment>
	  	<Modal show={this.state.purchasing} hideModal={this.hidePurchaseHandler}>
		  <OrderSummary 
		  	ingredients={this.state.ingredients} 
			subtotal={this.state.totalPrice} 
			purchaseContinued={this.purchaseContinueHandler} 
			purchaseCanceled={this.hidePurchaseHandler} />
		</Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
			ingredientAdded={this.addIngredientHandler} 
			ingredientRemoved={this.removeIngredientHandler} 
			disabled={disabledInfo} 
			purchasable={this.state.purchasable}
			price={this.state.totalPrice} 
			ordered={this.purchaseHandler} />
      </Fragment>
    )
  }
}

export default BurgerBuilder;
