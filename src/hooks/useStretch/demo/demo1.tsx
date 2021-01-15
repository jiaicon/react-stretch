/**
 * Created by icon on 2021/1/15
 */
import React, {useEffect, useState, useRef} from 'react';
import useStretch from './../index';

const Index: React.FC = () => {
  const ref = useRef(null);
  const distance = useStretch(ref);
  useEffect(() => {
    return () => {

    }
  }, []);
  console.log(distance);
  return (
    <div>
      <i
        ref={ref}
        style={{
          display: 'inline-block',
          width: 10,
          height: 10,
          backgroundColor: 'red',
          cursor: 'pointer'
        }}
      />
    </div>
  )
};

export default Index;

