import React from 'react';
import PropertyForm from './PropertyForm';

function PropertyList({ data, setData, selected }) {
  const curElem = data.find((item) => item.id === selected);

  return (
    <div className='property-list'>
      <div>Property</div>
      {curElem && <PropertyForm curElem={curElem} setData={setData} />}
    </div>
  );
}

export default PropertyList;
