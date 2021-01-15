#基于react的dom拖拽拉伸
npm install react-stretch  
-- 包含两个组件  --  
---1. useStretch: hook  
  使用方法：   
  ````
  import { useStretch } from 'react-stretch';  
  const distance = useStretch(ref);  
  interface Distance {
    x: number;  // 拖拽的x轴距离
    y: number;  // 拖拽的y轴距离
    pageX: number;  // 拖拽后的x轴位置
    pageY: number;  // 拖拽后的y轴位置
  }
  ````
---2. react-stretch组件，基于useStretch实现
  使用方法：   
  ````
  import ReactStretch from 'react-stretch';
  
  <ReactStretch
    
  />
  
  interface IProps{
    children?: React.ReactNode;
    className?: string;  // 自定义类名
    maxWidth?: number;  // 拖拽的最大宽度
    maxHeight?: number;  // 拖拽的最大高度
    style?: any;  // 自定义样式
    btnIcon?: React.ReactNode;  // 自定义按钮
  }
  ````


#npm_pro
#项目参考地址：https://www.jianshu.com/p/db6113c94dbc
#打包 npm run build
#增加版本号 npm version patch
#发布npm包 npm publish

#本地测试 npm run dev

#如遇到代理问题  允许  npm config set proxy null

#安装 npm i [包名]
