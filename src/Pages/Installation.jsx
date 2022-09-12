import React from 'react';
import { Helmet } from "react-helmet";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Installation() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>React Tutorial - Installation</title>
        </Helmet>
        <h3>Installation and Setup for React</h3> <hr></hr>
        <p>The most efficient way to setup react using the create-react-app. We have to install the npm module developed by facebook.</p>
        <SyntaxHighlighter language="powershell" style={docco}>
        {
          `npm install create-react-app --save`
        }
        </SyntaxHighlighter>
        <p>After installing the module, we can create our react application using the following command.</p>
        <SyntaxHighlighter language="powershell" style={docco}>
        {
          `npx create-react-app my-app
cd my-app
npm start`
        }
        </SyntaxHighlighter>
        <p>The folder structure will be created like this</p>
        <SyntaxHighlighter language="powershell" style={docco}>
        {
          `   my-app/
          README.md
          node_modules/
          package.json
          public/
            index.html
            favicon.ico
          src/
            App.css
            App.js
            App.test.js
            index.css
            index.js
            logo.svg`
        }
        </SyntaxHighlighter>
        <p>it supports most of the latest browsers, we have to use polyfills</p>
        <p>For testing the application, we can use the following command. it will run all the *.test.js files</p>
        <SyntaxHighlighter language="powershell" style={docco}>
        {
          `npm test`
        }
        </SyntaxHighlighter>
        <p>For building the application, we can use the following command. it will create a build folder where that code can be deployed in the server.</p>
        <SyntaxHighlighter language="powershell" style={docco}>
        {
          `npm run build`
        }
        </SyntaxHighlighter>
      </div>
    );
  }
  
  export default Installation;
  