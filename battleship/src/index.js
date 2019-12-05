import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gamers from './feature/nameGamers/Gamers.js'
import BattleField1 from './feature/Grid/BattleField1.js'



const container = document.getElementById('app');


ReactDOM.render(<BattleField1/> , container);