import React from 'react';
import { useDrag } from 'react-dnd';

function DraggableComponent({ tag, children }) {
  const [, drag] = useDrag(() => ({
    type: 'component',
    item: { tag },
  }));

  return <div ref={drag}>{children}</div>;
}

export default DraggableComponent;
