import React from 'react';
import { useDrop } from 'react-dnd';
import CustomButton from './custom/CustomButton';
import Resizable from './custom/Resizable';

function Canvas({ data, setData }) {
  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop(item, monitor) {},
  }));

  return (
    <div className='canvas' ref={drop}>
      {data.map((item) => (
        <Resizable defaultStyle={item.props.style} setData={setData}>
          <CustomButton
            text={item.props.text}
            key={item.id}
            style={item.props.style}
            variant={item.props.variant}
          />
        </Resizable>
      ))}
    </div>
  );
}

export default Canvas;
