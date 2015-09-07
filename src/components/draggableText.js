import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';

/**
 * Implements the drag source contract.
 */
const textSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

class DraggableText {
  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <span style={{ opacity: isDragging ? 0.5 : 1, backgroundColor: 'gray', padding: '5px' }}>
        {text}
      </span>
    );
  }
}

DraggableText.propTypes = propTypes;

export default DragSource('DraggableText', textSource, collect)(DraggableText);