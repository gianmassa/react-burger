import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.module.css'

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if(props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} hide={props.closed} />
      <div className={attachedClasses.join(' ')} >
        <div style={{height: "11%"}}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  )
}

export default SideDrawer
