import React from 'react';

function PropertyForm({ curElem, setData }) {
  const props = Object.entries(curElem.props);
  const [formData, setFromData] = React.useState(curElem.props);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    setData((prev) => {
      const arrCopy = [...prev];
      const index = prev.findIndex((item) => item.id === curElem.id);
      const copyItem = arrCopy[index];
      arrCopy.splice(index, 1, {
        ...arrCopy,
        props: {
          ...formData,
        },
      });
      return arrCopy;
    });
  };

  return (
    <div>
      {props.map((data) => {
        if (data[0] === 'style') return; // ignore style props
        return (
          <div key={data[0]}>
            <span>{data[0]}</span>
            <input
              type='text'
              name={data[0]}
              value={formData[data[0]]}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PropertyForm;
