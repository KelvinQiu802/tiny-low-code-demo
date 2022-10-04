import React from 'react';
import { useDrop } from 'react-dnd';

function Canvas({ data, setData }) {
  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop(item, monitor) {},
  }));

  return <div className='canvas' ref={drop}></div>;
}

export default Canvas;
