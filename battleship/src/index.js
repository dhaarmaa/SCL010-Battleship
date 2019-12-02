import React from 'react';
import ReactDOM from 'react-dom';

import nameGamers from './feature/gamers/nameGamers';

const element = <h1>Hola jugador soy Estoiko el vasto jefe de la isla Berk.
Escoge tu nombre de vikingo para iniciar.</h1>

const container = document.getElementById('app');


ReactDOM.render(element, container);