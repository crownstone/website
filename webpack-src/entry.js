import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './components/Hello';
import NameForm from './components/NameForm';

class App extends Component {
 render() {
   return (
   <Hello />
   )
 }
}

class App1 extends Component {
 render() {
   return (
   <NameForm />
   )
 }
}

render(<App1 />, document.getElementById('nameform'));

/**
 * If there is no nameform document, it seems the hello component is not rendered either.
 */
render(<App />, document.getElementById('hello'));

