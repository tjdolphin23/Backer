import React from 'react';
import InnerDashBox from '../innerDashBox.js';
import DashCard from '../cards/dashCard.js';

const AngelDash = () =>

	<InnerDashBox>
		<DashCard title="Find Products" button="Search"/>
		<DashCard title="View Investments" button="Investments"/>
	</InnerDashBox>

export default AngelDash;