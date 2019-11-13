import React from 'react'
import classes from './NavigationItem.module.css'

const NaviagtionItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a
        href={props.link}
        className={props.active ? classes.active : null} >
          {props.children}
      </a>
    </li>
  )
}

export default NaviagtionItem
