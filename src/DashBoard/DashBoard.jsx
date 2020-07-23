import React, { Component } from 'react';
import Item from './Item.jsx';
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: '分类支出',
          showSwitch: true,
          typeList: ['rose', 'bar'],
          typeIndex: 0,
          chartData: '',
        },
        {
          title: '支出趋势',
          typeList: ['line'],
          typeIndex: 0,
          chartData: '',
        },
      ],
    };
    this.handleSwitchChartType = this.handleSwitchChartType.bind(this);
  }
  handleSwitchChartType(typeIndex, index) {
    const newIndex = (typeIndex + 1) % 2;
    const items = [...this.state.items];
    items[index].typeIndex = newIndex;
    this.setState(
      {
        items,
      },
      () => {}
    );
  }
  render() {
    const Items = this.state.items.map((ele, index) => (
      <div className="col-mo" key={index}>
        <Item
          showSwitch={ele.showSwitch}
          switchChartType={(typeIndex) =>
            this.handleSwitchChartType(typeIndex, index)
          }
          title={ele.title}
          index={index}
          typeList={ele.typeList}
          typeIndex={ele.typeIndex}
        ></Item>
      </div>
    ));
    return (
      <div className="dashboard container">
        <div className="row">{Items}</div>
      </div>
    );
  }
}

export default DashBoard;
