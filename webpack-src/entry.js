import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './components/Hello';
import NameForm from './components/NameForm';
import BorderCircle from './components/BorderCircle';
import CircleList from './components/CircleList';

import { colors } from './styles';

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

/**
 * Todo: Create a container with 5 Crownstone icons
 */
/*
class App2 extends Component {
 render() {
   let size = 200;
   let imgStyle = {
      maxWidth: '80%'
   };
   return (
      <div>
         <BorderCircle size="200" borderWidth="40" color="white">
            <img src="/attachments/builtin-v2.png" style={imgStyle}></img>
         </BorderCircle>
         <BorderCircle size="200" borderWidth="40" color="white">
            <img src="/attachments/builtin-v2.png" style={imgStyle}></img>
         </BorderCircle>
      </div>
   )
 }
}
*/
class App3 extends Component {
  render() {
    let stage = 2;
    let circleColor = colors.csBlue.hex;
    let circleSize = 100;
    return (
       <div>
          <BorderCircle size={circleSize} color={circleColor}>
             <h1 style={{margin: "0 0 0 0"}}>{stage}</h1>
          </BorderCircle>
          <CircleList stage={stage}>
          </CircleList>
       </div>
    )
  }
}

render(<App3 />, document.getElementById('circlelist'));

//render(<App2 />, document.getElementById('bordercircle'));

render(<App1 />, document.getElementById('nameform'));

/**
 * If there is no nameform document, it seems the hello component is not rendered either.
 */
render(<App />, document.getElementById('hello'));

