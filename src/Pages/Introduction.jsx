import React from 'react';
import { Helmet } from "react-helmet";

function Introduction() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>React Tutorial - Introduction</title>
        </Helmet>
        
        <h3>Introduction to React</h3> <hr></hr>
        <h5>What is React</h5>
        <ul>
          <li>An Open source library developed and maintained by the developers of Facebook, Instagram and also a larger community of contributors.</li>
          <li>A declarative, efficient, and flexible JavaScript library for building user interfaces.</li>
          <li>Makes developing a large scale, single page application easier.</li>
          <li>Supports all the syntax of ECMA Script 2015/ES6.</li>
          <li>Can perform client-side as well as server side rendering.  If your app is more of dynamic data, you can go with client side scripting where you need not request the DOM for every change. - Static page can be rendered using server side scripts. - A good mixture of both helps maintain the page safe and efficient.</li>
        </ul>

        <h5>Virtual DOM</h5>
        <ul>
          <li>Has rapid DOM rendering speed because manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.</li>
          <li>Only the required part of DOM is updated.</li>
        </ul>

        <h5>Advantages</h5>
        <p>It helps to maintain the readability of apps using components which is discussed later. - Can easily update the state by refering the components.</p>
        <p>Faster and better, thanks to Virtual DOM.</p>

        <h5>Cons</h5>
        <p>React only covers view layer of the app, so you still need to choose other technologies to get a complete tooling set for development.</p>
      </div>
    );
  }
  
  export default Introduction;
  