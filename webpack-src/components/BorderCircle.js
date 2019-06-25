import React, { Component } from 'react';

import { colors } from '../styles';

class BorderCircle extends React.Component {
  render() {
    let size = this.props.size || 60;
    let borderWidth = this.props.borderWidth || 2;
    let borderColor = this.props.borderColor || colors.white.hex;
    let bodyColor = this.props.color || colors.csBlue.hex;
    let innerSize = size - 2*borderWidth;
    return (
        <div style={{width: innerSize, height: innerSize, borderRadius: 0.5*innerSize, 
            borderColor: borderColor, borderWidth: borderWidth, borderStyle: 'solid',
            alignItems:'center', justifyContent:'center', backgroundColor: bodyColor, display:'flex'}}>
          { this.props.children }
        </div>
    );
  }
}

export default BorderCircle;
