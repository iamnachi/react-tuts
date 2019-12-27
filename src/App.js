import React from 'react';
import Sidenav from './Layout/Sidenav';
import Main from './Layout/Main';
import './bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidenav></Sidenav>
        <Main></Main>
      </Router>
    </div>
  );
}

export default App;
