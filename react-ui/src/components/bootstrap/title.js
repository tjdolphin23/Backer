import React from 'react';

const Title = ({text1, text2}) =>
	<div>
		<div className="row justify-content-center">
			<div className="text-center col-xs-12 col-lg-6">
				<p className="title">{text1}</p>
			</div>
		</div>
		<div className="row justify-content-center">
			<div className="text-center col-12">
				<h4>{text2}</h4>
			</div>
		</div>
	</div>

export default Title;