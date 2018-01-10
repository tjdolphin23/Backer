import React from 'react';

const DashCard = ({title, button}) =>

	<div className="card col-12 col-md-4 mx-auto">
	  <div className="card-body">
	    <h5 className="card-title">{title}</h5>
	    <a href="#" className="btn btn-primary">{button}</a>
	  </div>
	</div>

export default DashCard;