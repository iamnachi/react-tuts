import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Introduction from '../Pages/Introduction';
import Installation from '../Pages/Installation';
import Components from '../Pages/Components';
import Composition from '../Pages/Composition';

class Main extends Component {
    render() {
        return (
            <div className="main container-fluid p-0">
                <Route exact path="/" render={()=> <Introduction/>} />
                <Route path="/installation" render={()=> <Installation/>} />
                <Route path="/components" render={()=> <Components/>} />
                <Route path="/composition" render={()=> <Composition/>} />
            </div>
        );
    }
}        
export default Main;
