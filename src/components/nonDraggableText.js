import React, { PropTypes } from 'react';

class NonDraggableText {
  render() {
    return (
      <span style={{ backgroundColor: 'gray', padding: '5px' }}>
        {this.props.text}
      </span>
    );
  }
}

export default NonDraggableText;