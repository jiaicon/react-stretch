/**
 * Created by icon on 2021/1/5
 */
import React, { useState, useRef, useEffect } from 'react';
import useStretch from './../hooks/useStretch';
import './styles.css';

export interface IProps{
  children?: React.ReactNode;
  className?: string;
  maxWidth?: number;
  maxHeight?: number;
  style?: any;
  btnIcon?: React.ReactNode;
}
const initState = {
  width: 360,
  height: 200,
};
interface StretchType extends React.FC<IProps> {
  useStretch: typeof useStretch;
}
const Index: StretchType = (props) => {
  const { children, className, maxWidth, maxHeight, btnIcon, style } = props;
  const [boxSize, setBoxSize] = useState(initState);
  const boxRef: any = useRef();
  const distance = useStretch(boxRef);
  useEffect(() => {
    const width = boxSize.width + distance.x;
    const height = boxSize.height + distance.y;
    const bWidth = (maxWidth && width > maxWidth) ? maxWidth : width;
    const bHeight = (maxHeight && height > maxHeight) ? maxHeight : height;
    const state = {
      width: bWidth,
      height: bHeight,
    };
    setBoxSize(state);
  }, [distance]);

  const BtnIcon = btnIcon || (<i
    ref={boxRef}
    className='dragIcon'
  />);

  return (
    <div
      className={`__useDrag ${className}`}
      style={{
        ...style,
        ...boxSize,
      }}
    >
      {children && children}

      {BtnIcon}
    </div>
  );
};

Index.useStretch = useStretch;

export default Index;
