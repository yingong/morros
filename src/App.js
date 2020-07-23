import React from 'react';
import './App.scss';
import DashBoard from './DashBoard/DashBoard';
import Details from './Details/Details';
import NoteIcon from './assets/账本.png';
import PieIcon from './assets/饼图.png';
import Header from './Header/Header.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: 1,
    };
    this.changeRoute = this.changeRoute.bind(this);
  }
  changeRoute(currentRoute) {
    this.setState({
      currentRoute,
    });
  }
  render() {
    const { currentRoute: route } = this.state;
    console.log(route);

    let dis_mainSection;
    switch (route) {
      case 0:
        dis_mainSection = <Details></Details>;
        break;
      default:
        dis_mainSection = <DashBoard></DashBoard>;
        break;
    }
    return (
      <div className="App ">
        <Header></Header>
        <section className="main">{dis_mainSection}</section>
        <div className="route-panel">
          <div className="row">
            <div className="col">
              <img src={NoteIcon} alt="" onClick={() => this.changeRoute(0)} />
            </div>
            <div className="col">
              <img src={PieIcon} alt="" onClick={() => this.changeRoute(1)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
