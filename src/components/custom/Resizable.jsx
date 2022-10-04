import React from 'react';

function Resizable({ children, defaultStyle, setData }) {
  const points = ['t', 'r', 'b', 'l', 'lt', 'rt', 'lb', 'rb'];

  const getPointStyle = (point) => {
    const { width, height } = defaultStyle;
    const hasT = point.includes('t');
    const hasB = point.includes('b');
    const hasL = point.includes('l');
    const hasR = point.includes('r');

    let newLeft, newTop;
    if (point.length === 2) {
      // 四个角
      newLeft = hasL ? 0 : width;
      newTop = hasT ? 0 : height;
    } else {
      // 上下两点
      if (hasT || hasB) {
        newLeft = width / 2;
        newTop = hasT ? 0 : height;
      }
      // 左右两点
      if (hasL || hasR) {
        newLeft = hasL ? 0 : width;
        newTop = height / 2;
      }
    }

    const style = {
      position: 'absolute',
      left: `${newLeft}px`,
      top: `${newTop}px`,
      marginLeft: hasR ? '-4px' : '-3px',
      marginTop: '-3px',
      // cursor: `${direction[point]}-resize`,
      zIndex: 100,
    };
    return style;
  };

  const handleMouseDown = (e, point) => {};

  const containerStyle = {
    position: 'absolute',
    width: `${defaultStyle.width}px`,
    height: `${defaultStyle.height}px`,
    top: `${defaultStyle.top}px`,
    left: `${defaultStyle.left}px`,
  };

  return (
    <div style={containerStyle}>
      {points.map((point) => (
        <div
          key={point}
          className='point'
          style={getPointStyle(point)}
          onMouseDown={(e) => handleMouseDown(e, point)}
        ></div>
      ))}
      {children}
    </div>
  );
}

export default Resizable;
