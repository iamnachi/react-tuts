import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Basics from '../Pages/Basics';
import Components from '../Pages/Components';
import Composition from '../Pages/Composition';

class Main extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <Route exact path="/basics" component={Basics} />
                <Route path="/components" component={Components} />
                <Route path="/composition" component={Composition} />
            </div>
        );
    }
}        
export default Main;
