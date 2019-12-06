import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Buttons extends Component {
    render() {
        return (
    <div>
        <Switch>
º       <a href={ this.props.href } className = { this.props.btnClass } > { this.props.name } </a>

       </Switch>

    </div>
        )
    }
}

export default Buttons;