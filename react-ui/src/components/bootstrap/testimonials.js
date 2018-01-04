import React from 'react';

const Testimonials = () =>
	<div className="row justify-content-center testimonial">
		<div className="col-12 col-md-4 mt-2">
			<div className="card testiCard">
			  <div className="card-header testiColor">
					<div className="row justify-content-center">
						<div className="col-4 testiTitle1"><h5>Speak It</h5></div>
						<div className="col-4 testiTitle2"><h5>Darcy P.</h5>Gilbert, AZ</div>
						<div className="col-4 testiPicDiv">
						<img src="./assets/images/darcy.jpeg" alt="darcy" className="img-thumbnail"></img>
					</div>
				</div>
				</div>	
			  <div className="card-body">
			    <p className="card-text">"I can't believe how helpful Angel Fish was in connecting me with intelligent business professionals"</p>
			    <a href="/wip" alt="testimonial" className="testiColor">Learn More about Darcy's Experience</a>
			  </div>
			</div>
		</div>
		<div className="col-12 col-md-4 mt-2">
			<div className="card testiCard">
			  <div className="card-header testiColor">
					<div className="row justify-content-center">
						<div className="col-4 testiTitle1"><h5>BroGainz</h5></div>
						<div className="col-4 testiTitle2"><h5>Alex A.</h5>Phoenix, AZ</div>
						<div className="col-4 testiPicDiv">
								<img src="./assets/images/alex.jpeg" alt="alex" className="img-thumbnail"></img>
						</div>
					</div>
				</div>	
			  <div className="card-body">
			    <p className="card-text">"Knowing you are not alone in the pursuit of your dreams makes them so much more attainable"</p>
			    <a href="/wip" alt="testimonial" className="testiColor">Learn More about Alex's Experience</a>
			  </div>
			</div>
		</div>
		<div className="col-12 col-md-4 mt-2">
			<div className="card testiCard">
			  <div className="card-header testiColor">
					<div className="row justify-content-center">
						<div className="col-4 testiTitle1"><h5>Codopoly</h5></div>
						<div className="col-4 testiTitle2"><h5>Carson H.</h5>Scottsdale, AZ</div>
						<div className="col-4 testiPicDiv">
								<img src="./assets/images/carson.jpeg" alt="carson" className="img-thumbnail"></img>
						</div>
					</div>
				</div>	
			  <div className="card-body">
			    <p className="card-text" >"Angel Fish has been so much more than funding - the mentorship I've gained is invaluable"</p>
			    <a href="/wip" alt="testimonial" className="testiColor">Learn More about Carson's Experience</a>
			  </div>
			</div>
		</div>	
	</div>
export default Testimonials;