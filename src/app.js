import React from 'react';
import ReactDOM from 'react-dom';

import Tab from './tab/tab';

let tabIndex = 1;
function onTabChange() {
    tabIndex = 0;
}

ReactDOM.render(<Tab
        tabs={[
            { label: "项目详情", component: <div>哈哈哈</div> },
            { label: "项目社区", component: <div>456</div> }
        ]}
        onChange={onTabChange}
        selectedIndex={tabIndex}
    />, document.getElementById('app'));