import React from 'react';

const Testimonials = () =>
	<div className="row testimonial">
		<div className="col-4">
			<div className="card mb-3 testiCard">
			  <div class="card-header testiColor"><h5>Darcy</h5></div>	
			  <div className="card-body">
			    <p className="card-text">"I can't believe how helpful Go Fish was in connecting me with intelligent business professionals"</p>
			    <a href="#" alt="testimonial" className="testiColor">Learn More about Darcy's Experience</a>
			  </div>
			</div>
		</div>
		<div className="col-4">
			<div className="card mb-3 testiCard">
			  <div class="card-header testiColor"><h5>Alex</h5></div>	
			  <div className="card-body">
			    <p className="card-text">"Knowing you are not alone in the pursuit of your dreams makes them so much more attainable"</p>
			    <a href="#" alt="testimonial" className="testiColor">Learn More about Alex's Experience</a>
			  </div>
			</div>
		</div>
		<div className="col-4">
			<div className="card mb-3 testiCard">
			  <div class="card-header testiColor"><h5>Carson</h5></div>	
			  <div className="card-body">
			    <p className="card-text" >"Go Fish has been so much more than funding - the mentorship I've gained is invaluable"</p>
			    <a href="#" alt="testimonial" className="testiColor">Learn More about Carson's Experience</a>
			  </div>
			</div>
		</div>	
	</div>
export default Testimonials;