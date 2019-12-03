import React, { Component } from "react";
import Square from './square';
import './Tablero.css';

export default class Tablero extends Component {
    render() {
        return (
            <div className="tablero">
                {
                    this.props.body.map((Square)=> <Square position={Square.position}/>)
                }
            </div>
        );
    }
};


export default () => {
    
    let row = [];

    while (Square.length < column.length){
        