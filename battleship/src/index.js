import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gamers from './Components/nameGamers/Gamers.js';
import BattleField1 from './Components/Grid/BattleField1.js';
import Board from './Components/Grid/Board.js';
import AllPlayers from './Components/AllPlayers.js';
import Astrid from './Components/Players/Dragones/Astrid/Astrid.js';

const container = document.getElementById('app');


ReactDOM.render(<AllPlayers/> , container);