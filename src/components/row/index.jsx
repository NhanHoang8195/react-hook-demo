import React from 'react';

import './index.scss';

export default function Row (props) {
  return (
    <div className='rh-row'>
      {props.children}
    </div>
  );
}