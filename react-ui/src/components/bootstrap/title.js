import React from 'react';

const Title = ({text1, text2}) =>
	<div>
		<div className="row justify-content-center">
			<div className="col text-center">
				<p className="title">{text1}</p>
			</div>
		</div>
		<div className="row justify-content-center">
			<div className="col text-center">
				<p className="title2">{text2}</p>
			</div>
		</div>
	</div>

export default Title;