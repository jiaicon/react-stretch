/**
 * Created by icon on 2021/1/5
 */
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

export interface IProps {
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
const Index: React.FC<IProps> = (props) => {
  const { children, className, maxWidth, maxHeight, btnIcon, style } = props;
  const [boxSize, setBoxSize] = useState(initState);
  const boxRef: any = useRef();
  let disX = 0;
  let disY = 0;
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const onMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    const { pageX, pageY } = event;
    const X = pageX - disX;
    const Y = pageY - disY; //计算前后坐标的差值
    const dragWidth = boxSize.width + X; //为宽度加上差值
    const dragHeight = boxSize.height + Y; //为高度加上差值
    let width=dragWidth;
    let height=dragHeight;
    if (maxWidth) {
      if (dragWidth > maxWidth) {
        width = maxWidth;
      }
    }
    if (maxHeight) {
      if (dragHeight > maxHeight) {
        height = maxHeight;
      }
    }
    setBoxSize({
      width,
      height,
    });
  };
  const onMouseDown = () => {
    const dom: any = ReactDOM.findDOMNode(boxRef.current);
    if (dom) {
      const e = dom.getBoundingClientRect();
      disX = e.left;
      disY = e.top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
      });
    }
  };

  const BtnIcon = btnIcon || (<i
    ref={boxRef}
    className='dragIcon'
    onMouseDown={onMouseDown}
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

export default Index;
