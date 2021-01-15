/**
 * Created by icon on 2021/1/15
 */
import {useEffect, useState, useCallback} from 'react';
import { BasicTarget, getTargetElement } from '../../../utils/dom';

interface Distance {
  x: number;
  y: number;
  pageX: number;
  pageY: number;
}

export type Target = BasicTarget<HTMLElement | Document>;
export type DragListenController = (val: Distance) => boolean;
let disX = 0;
let disY = 0;
// @ts-ignore
const useStretch = (target?: Target, shouldUpdate: DragListenController = () => true) => {
  const [distance, setDistance] = useState<Distance>({
    x: 0,
    y: 0,
    pageX: NaN,
    pageY: NaN,
  });
  const shouldUpdatePersist = useCallback(shouldUpdate, []);

  useEffect(() => {
    const el = getTargetElement(target);
    if (!el) return;
    function updateDistance(event: MouseEvent): void {
      event.preventDefault();
      const { pageX, pageY } = event;
      const X = pageX - disX;
      const Y = pageY - disY; //计算前后坐标的差值
      disX = pageX;
      disY = pageY;
      setDistance({
        x: X,
        y: Y,
        pageX,
        pageY,
      })
    }

    function listenerMouseDown(ev: any) {
      if (!ev) return;
      const { pageX, pageY } = ev;
      disX = pageX;
      disY = pageY;
      document.addEventListener('mousemove', updateDistance);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', updateDistance);
      });
    }

    el.addEventListener('mousedown', listenerMouseDown);
    return () => {
      el.removeEventListener('mousedown', listenerMouseDown);
    };
  }, [target, shouldUpdatePersist]);

  return distance;
};

export default useStretch;
