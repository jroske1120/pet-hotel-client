import React, { Component } from 'react';
import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

//Import Pages
import HomePage from '../Pages/HomePage/HomePage';
import ManagerOwnerPage from '../Pages/ManagerOwnerPage/ManagerOwnerPage';


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'DISPLAY_ITEMS' });
    this.props.dispatch({ type: 'GET_OWNER' });
  };

  render() {
    return (
      <div className="App">
        <header>
          <img src={require('../App/images/TKH.jpg')} />
        </header>
        <Router>
          <nav>
            <ul>
              <li><Link to='/'>DashBoard</Link></li>
              <li><Link to='/manager_owner'>Manager Owners</Link></li>
            </ul>
          </nav>
          <Route exact path='/' component={HomePage} />
          <Route path='/manager_owner' component={ManagerOwnerPage} />
        </Router>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
