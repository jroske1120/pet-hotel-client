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
    this.props.dispatch({ type: 'GET_SAMPLE_API_CALL' });
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Pet Hotel</h1>
        </header>
        <Router>
          <nav>
            <ul>
              <li><Link to='/'>DashBoard</Link></li>
              <li><Link to='/manager_owner'>Manager Owners</Link></li>
            </ul>
          </nav>
          <Route exact path='/' component={HomePage}/>
          <Route path='/manager_owner' component={ManagerOwnerPage}/>
        </Router>
      </div>
      );
    }
  }

export default connect(mapStoreToProps)(App);
