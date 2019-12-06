import React from 'react';
import '../views/introduction.css';
import '../components/button/button.css';
import Button from '../components/button/button';

import { Link } from "react-router-dom";




function introduction() {
	return (
		<div className="home">
		
			<div className="home-content">
			
				<div className="fonnt">
					<h3></h3>
					
				</div>

				<div className= "namee">
                    <input type="name">Nombre</input>
					<Link to="/positions"> <Button name='siguiente' btnClass= 'btngenerals' /></Link>
				
				</div>	
		</div>

		</div>       
	)
}

export default introduction;