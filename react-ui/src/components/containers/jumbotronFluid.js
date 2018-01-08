import React from 'react';

const Jumbo = ({children, css}) =>

	<div className={`jumbotron-fluid ${css}`}>
		{children}
	</div>

export default Jumbo;