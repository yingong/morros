import React, { Component } from 'react';
import Card from './Card.jsx';
class Details extends Component {
  render() {
    return (
      <section className="details-section container">
        <div className="row">
          <div className="col-md">
            <Card></Card>
          </div>
          <div className="col-md">
            <Card></Card>
          </div>
          <div className="col-md">
            <Card></Card>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
