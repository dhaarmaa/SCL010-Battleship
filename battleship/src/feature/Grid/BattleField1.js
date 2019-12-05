import React from 'react';
import { Col } from 'react-bootstrap';
import '../../feature/styles/BattleField1.css';
import Hippo from '../../img/hippo.png';

class BattleField1 extends React.Component {
	render(){
		return (

			<div className='general'>
			<div className='imgGamers'>
				<img src={Hippo} alt='Hippo'/>
			</div>

			<div className='title'>
				<h1>Hola Astrid, yo soy Hipo hijo de Estoiko te informo que  tu tropa se compone de 24 vikingos que están reunidos en pequeños grupos, ve y organizalos, y si deseas una organización rápida tienes la opción automática.</h1>
			</div>



			<div>
				<button className='button'>Organización Automática</button>
			</div>
			<div>
				<button className='button'>Iniciar Juego</button>
			
		</div>
	</div>

		
	)
};
}

export default BattleField1;