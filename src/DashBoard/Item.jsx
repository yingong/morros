import React, { Component } from 'react';
import echarts from 'echarts';
import chartMap from './chartMap';
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myChart: '',
    };
    this.renderChartViaDOM = this.renderChartViaDOM.bind(this);
  }
  renderChartViaDOM() {
    const { index, chartData, typeList, typeIndex } = this.props;
    const option = chartMap[typeList[typeIndex]];
    // 如果没有该类型图源
    if (!option) return;
    option.chartData = chartData;
    option.itemStyle = { color: '#2d6cdf' };
    // DOM操作;
    const dom = document.getElementById(`echarts-${index}`);
    //   需要清空dom节点来重新初始化
    dom.innerHTML = `<div style="width:300px;height:300px"></div>`;
    var myChart = echarts.init(dom.children[0]);
    myChart.setOption(option);
  }
  componentDidMount() {
    this.renderChartViaDOM();
  }
  componentDidUpdate(prevProps, _) {
    if (prevProps.typeIndex !== this.props.typeIndex) {
      this.renderChartViaDOM();
    }
  }
  render() {
    const {
      index,
      typeList,
      showSwitch,
      title,
      switchChartType,
      typeIndex,
    } = this.props;
    return (
      <div className="item">
        <header>{title}</header>
        {showSwitch && (
          <button
            className="btn btn-primary"
            style={{ zIndex: 3 }}
            onClick={() => switchChartType(typeIndex)}
          >
            条形图
          </button>
        )}
        <div id={`echarts-${index}`} className="main"></div>
      </div>
    );
  }
}
Item.defaultProps = {
  type: 'rose',
  showSwitch: false,
  title: '',
};
export default Item;
