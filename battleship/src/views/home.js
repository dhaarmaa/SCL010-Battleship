import React from 'react';
import '../views/home.css';
import '../components/button/button.css';
import Button from '../components/button/button';

import { Link } from "react-router-dom";




function home() {
	return (
		<div className="home">
		
			<div className="home-content">
			
				<div className="fonnt">
					<h3>Chimuelo Attack!</h3>
					
				</div>

				<div className= "button">
					<Link to="/intro"> <Button name='jugar' btnClass= 'btnhome' /></Link>
				
				</div>	
		</div>

		</div>       
	)
}

export default home;
