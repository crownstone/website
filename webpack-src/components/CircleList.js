import React, { Component } from 'react';
import BorderCircle from './BorderCircle';

import { colors } from '../styles';

class CircleList extends React.Component {
  render() {
    let circleSize = this.props.circleSize || 200;
    let circleBorderWidth = this.props.circleBorderWidth || 8;
    let imgStyle = {
      maxWidth: '100%'
    };
    let itemMaxWidth = circleSize * 1.25;
    let circleColor = this.props.circleColor || 'white';
    let imageSrc = "/attachments/builtin-v2-icon.png";

    let stage = this.props.stage || 0;

    const list = [
      {
        id: 'default',
        stage: 0,
        discount: 'geen korting'
      },
      {
        id: 'a',
        stage: 1,
        discount: '20% korting'
      },
      {
        id: 'b',
        stage: 2,
        discount: '40% korting'
      },
      {
        id: 'c', 
        stage: 3,
        discount: '60% korting'
      },
      {
        id: 'd', 
        stage: 4,
        discount: '80% korting'
      },
      {
        id: 'e',
        stage: 5,
        discount: 'gratis'
      }
    ];
    
    let circleBorderColors = [ colors.darkGreen.hex, colors.csOrange.hex ];
    
    return (
      <ul style={{ listStyleType: "none"}}>
         {list.map(item => (
           <li key={item.id} style={{display: "inline-block", padding: "0px 10px 0px 10px", maxWidth: itemMaxWidth }}>
             <BorderCircle size={circleSize} borderWidth={circleBorderWidth} color={circleColor} borderColor={circleBorderColors[item.stage <= stage ? 0 : 1]}>
               <img src={imageSrc} style={imgStyle}></img>
             </BorderCircle>
             <p style={{textAlign: 'center'}}>
               {item.discount} (1 jaar) 
             </p>
           </li>
         ))}
      </ul>
    );
  }
}

export default CircleList;
