import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../feature/nameGamers/Gamers.ccs';
import EstoicoImg from '../../img/Estoico.png';

class Gamers extends React.Component {
	render(){
		return <div>
			<div>
				<img src={EstoicoImg} alt='Estoico'/>
			</div>

			<div className='title'>
				<h1 id= "intro">Hola jugador soy Estoiko el vasto jefe de la isla Berk.
Escoge tu nombre de vikingo para iniciar.</h1>
			</div>

			<div>
			</div>
		</div>;
		
	}
}

export default Gamers;