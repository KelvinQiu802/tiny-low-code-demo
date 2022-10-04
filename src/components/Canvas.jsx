import React from 'react';
import { useDrop } from 'react-dnd';
import CustomButton from './custom/CustomButton';
import Resizable from './custom/Resizable';

function Canvas({ data, setData, selected, setSelected }) {
  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop(item, monitor) {},
  }));

  const select = (id) => {
    setSelected(id);
  };

  return (
    <div className='canvas' ref={drop}>
      {data.map((item) => (
        <Resizable
          key={item.id}
          defaultStyle={item.props.style}
          setData={setData}
          id={item.id}
          selected={selected}
        >
          <CustomButton
            text={item.props.text}
            id={item.id}
            key={item.id}
            style={item.props.style}
            variant={item.props.variant}
            select={select}
          />
        </Resizable>
      ))}
    </div>
  );
}

export default Canvas;
