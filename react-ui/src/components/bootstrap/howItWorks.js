import React from 'react';

const How = ({one, two, three, four}) =>

	<div className="row justify-content-center">
		<div className="card howItWorks">
			<p className="howText">{one}</p>
		</div>
		<div className="arrow">
		</div>
		<div className="card howItWorks text-center">
			<p className="howText">{two}</p>
		</div>
		<div className="arrow">
		</div>
		<div className="card howItWorks text-center">
			<p className="howText">{three}</p>
		</div>
		<div className="arrow">
		</div>
		<div className="card howItWorks text-center">
			<p className="howText">{four}</p>
		</div>
	</div>

export default How;