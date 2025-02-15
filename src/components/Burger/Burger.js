import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) // An array with the keys of props.ingredients [salad, bacon, cheese, meat]
    .map(ingredientsKey => {
      return [...Array(props.ingredients[ingredientsKey])].map((_, i) => {
        return <BurgerIngredient type={ingredientsKey} key={ingredientsKey + i} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, [])

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger
