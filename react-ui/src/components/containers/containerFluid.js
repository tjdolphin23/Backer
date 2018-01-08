import React from 'react';

const ContainerFluid = ({children, css}) =>
	<div className={`container-fluid ${css}`}>
		{children}
	</div>

export default ContainerFluid;