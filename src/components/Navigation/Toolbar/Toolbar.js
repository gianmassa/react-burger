import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Logo from '../../Logo/Logo'
import classes from './Toolbar.module.css'

const Toolbar = (props) => (
	<header className={classes.Toolbar} >
		<DrawerToggle clicked={props.drawerToggleClicked}/>
		<div style={{height: "80%"}}>
			<Logo />
		</div>
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
)

export default Toolbar
