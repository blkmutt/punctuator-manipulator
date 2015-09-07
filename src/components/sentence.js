import React, { PropTypes } from 'react';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { DragDropContext } from 'react-dnd';
import DraggableText from './DraggableText';
import NonDraggableText from './NonDraggableText';

class Sentence {
  mixins: [ReactDND.DragDropMixin]

  render() {
    const text = this.props.children;
    let splitText;
    let components = [];

    if(text !== undefined) {
      splitText = text.split(/\s*\b\s*/);
      splitText.forEach(function(text) {
        if(text == ',') {
          components.push(<DraggableText text={text} />);
        }
        else {
          components.push(<NonDraggableText text={text} />);
        }
      });
    }

    return (
      <div>
        {components}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Sentence);