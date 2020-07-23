import React from 'react';
import Bowl from '../assets/碗.svg';
const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div>2020年12月31日 今天</div>
        <div className="summary">
          <span>收</span> 1999.9
          <span>支</span>2990.9
        </div>
      </div>
      <div className="card-main">
        <div className="card-row">
          <img src={Bowl} alt="icon" />
          <div>黄焖鸡黄焖鸡黄焖鸡黄焖鸡</div>
          <span> - 199.9</span>
        </div>
        <div className="card-row">
          <img src={Bowl} alt="icon" />
          <div>黄焖鸡黄焖鸡黄焖鸡黄焖鸡</div>
          <span> - 199.9</span>
        </div>
        <div className="card-row">
          <img src={Bowl} alt="icon" />
          <div>黄焖鸡黄焖鸡黄焖鸡黄焖鸡</div>
          <span> - 199.9</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
