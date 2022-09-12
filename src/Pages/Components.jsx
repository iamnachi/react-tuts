import React from 'react';
import { Helmet } from "react-helmet";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Components() {

    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>React Tutorial - Components</title>
        </Helmet>
        <h3>Components & Props</h3> <hr></hr>
        <p>In a react application, we can split a certain layer as components. Components are the building blocks of our application.</p>
        <SyntaxHighlighter language="javascript" style={dracula}>
        {
          `class Welcome extends React.Component {
  state = {
    message: 'Welcome here'
  }
  render() {
    return <h1>Hello, {this.props.name} {this.state.message}</h1>;
  }
}`
        }
        </SyntaxHighlighter>
        <p>We can replace the class components as functional component. Earlier static components are called functional components.</p>
        <SyntaxHighlighter language="javascript" style={dracula}>
        {
          `functional Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}`
        }
        </SyntaxHighlighter>
        <p>In order to access the state using functional components. we have to use hooks.</p>
        <SyntaxHighlighter language="javascript" style={dracula}>
        {
          `functional Welcome(props){
  const [message, setMessage] = useState('Welcome here');

  return <h1>Hello, {props.name} {message}</h1>;
}`
        }
        </SyntaxHighlighter>
        <br></br>
        <h5>Pure component</h5>
        <p>ReactJS has provided us a Pure Component. If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or  Not.</p>
        <SyntaxHighlighter language="javascript" style={dracula}>
        {
          `class Welcome extends React.PureComponent {
  state = {
    message: 'Welcome here'
  }
  render() {
    return <h1>Hello, {this.props.name} {this.state.message}</h1>;
  }
}`
        }
        </SyntaxHighlighter>
        <p>For functional components, we can user React.memo for converting it to pure component</p>
        <SyntaxHighlighter language="powershell" style={dracula}>
        {
          `import React, { memo } from 'react';
functional Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}
export default memo(Welcome)`
        }
        </SyntaxHighlighter>
      </div>
    );
  }
  
  export default Components;
  