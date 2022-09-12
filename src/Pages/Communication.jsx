import React from 'react';
import { Helmet } from "react-helmet";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Communication() {

    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>React Tutorial - Communication</title>
        </Helmet>
        <h3>Communication - Parent to Child</h3> <hr></hr>
     </div>
    )
}

export default Communication;