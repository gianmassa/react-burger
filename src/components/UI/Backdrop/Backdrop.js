import React from 'react'

const Backdrop = (props) => (
	props.show ?
		<div style={{
			width: '100%',
			height: '100%',
			position: 'fixed',
			zIndex: '100',
			left: '0',
			top: '0',
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		}}
		onClick={props.hide}>
		</div> : null
)

export default Backdrop
