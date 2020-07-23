import React from 'react';
import Options from '../assets/选项.png';
const Header = () => {
  return (
    <div className="header">
      <h3 className="route">统计</h3>
      <div className="triangle"></div>
      <h2>Moros</h2>
      <div className="bottom">
        <div className="categories">
          全部分类
          <img src={Options} alt="选项" />
        </div>
        <div className="summary">
          <div className="time-select">2020年1月</div>
          <div className="in-out-come">
            <span>总收入:</span>300000
            <span className="out-come">总支出:</span>12312321
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
