import React, { Component } from 'react';
import './Container.css';

export default class Container extends Component {
    render() {
        return (
            <React.Fragment>
              <div className = "body"></div>
              <div>
                <button className = "Comenzar">
                Comenzar
                </button>
              </div>
              
              <div className="puntaje">
                Puntaje:
              </div>
            </React.Fragment>
        );
    }
};