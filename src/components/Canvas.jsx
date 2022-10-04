import { nanoid } from 'nanoid';
import React from 'react';
import { useDrop } from 'react-dnd';
import CustomButton from './custom/CustomButton';
import Resizable from './custom/Resizable';

function Canvas({ data, setData, selected, setSelected }) {
  const elem = React.useRef();

  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item, monitor) => handleDrop(item, monitor),
  }));

  const handleDrop = (item, monitor) => {
    if (item.tag === 'button') {
      setData((prev) => [
        ...prev,
        {
          tag: 'button',
          id: nanoid(),
          props: {
            text: 'Kelvin',
            variant: 'outlined',
            style: {
              position: 'absolute',
              width: 100,
              height: 30,
              left: monitor.getClientOffset().x - elem.current.offsetLeft,
              top: monitor.getClientOffset().y - elem.current.offsetTop,
            },
          },
        },
      ]);
    }
  };

  const select = (id) => {
    setSelected(id);
  };

  drop(elem);
  return (
    <div className='canvas' ref={elem}>
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
