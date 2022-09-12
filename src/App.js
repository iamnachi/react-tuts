import React from 'react';
import { Helmet } from "react-helmet";
import Sidenav from './Layout/Sidenav';
import Main from './Layout/Main';
import './bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Tutorial</title>
      </Helmet>
      <Router>
        <Sidenav></Sidenav>
        <Main></Main>
      </Router>
    </div>
  );
}

export default App;
