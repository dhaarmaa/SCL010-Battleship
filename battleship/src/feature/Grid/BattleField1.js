import React from 'react';
import { Col } from 'react-bootstrap';
import '../../feature/styles/BattleField1.css';
import Hippo from '../../img/hippo.png';
import vikingo from '../../img/vikingo.png';
import Board from './Board.js';

//var styles = {
//backgroundImage: 'url(' + require('./../../img/The-Berk-Island.png') + ')' 
//};

class BattleField1 extends React.Component {
	render(){
		return (

<div className='bg'>
			<div className='general'>
			
			<div className='title'>
				<h1>Hola Astrid, yo soy Hipo hijo de Estoiko te informo que  tu tropa se compone de 24 vikingos que están reunidos en pequeños grupos, ve y organizalos, y si deseas una organización rápida también cuentas con la opción automática.</h1>
			</div>


			<div className='imgGamers'>
				<img src={Hippo} alt='Hippo'/>
			</div>

			
</div>

			<div className='Vikingo'>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>

			</div>

			<div className='Vikingo'>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>

			</div>

			<div className='Vikingo'>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>

			</div>

			<div className='Vikingo'>
				<img src={vikingo} alt='Vikingo'/>
				<img src={vikingo} alt='Vikingo'/>

			</div>

			<div className='Vikingo'>
				<img src={vikingo} alt='Vikingo'/>

			</div>


<div className='Board'>
<Board />
</div>
			<div className='Button'>
				<button>Organización Automática</button>
			</div>
			<div className='Button'>
				<button>Iniciar Juego</button>
			
		</div>
	</div>



		
	)
};
}

export default BattleField1;