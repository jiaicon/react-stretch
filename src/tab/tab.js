/* eslint  "jsx-a11y/no-static-element-interactions":"off", "react/no-array-index-key":"off" */
import React, { PropTypes } from 'react';
import autoBind from 'react-autobind';
import classnames from 'classnames';
import './tab.css';

class Tab extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      selectedIndex: props.selectedIndex || 0,
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps() {
  }

  componentWillUnmount() {}

  // handleFilterHeaderClick(optionType) {
  //   return () => {};
  // }

  handleTabSelected(idx) {
    return () => {
      const { selectedIndex } = this.state;

      if (idx === selectedIndex) {
        return;
      }

      this.setState({
        selectedIndex: idx,
      }, () => {
        if (this.props.onChange) {
          this.props.onChange(idx, selectedIndex);
        }
      });
    };
  }

  render() {
    const { selectedIndex } = this.state;
    const { tabs } = this.props;

    return (
      <div className="component-tab">
        <div className="tab-header">
          <ul className="tabs">
            {
              tabs.map((tab, idx) => <li
                key={idx} className={classnames({ selected: idx === selectedIndex })}
              >
                <a onClick={this.handleTabSelected(idx)}>{tab.label}</a>
              </li>)
            }
          </ul>
          <div className="line1px" />
        </div>
        {
          tabs.map((tab, idx) => <div
            key={idx} className={classnames({ 'tab-panel': true, 'tab-panel-show': idx === selectedIndex })}
          >
            {tab.component}
          </div>,
          )
        }
      </div>
    );
  }
}
export default Tab;
