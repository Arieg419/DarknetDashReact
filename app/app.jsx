// React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// App Components
import Main from 'Main';
import Navigation from 'Navigation';
import Dashboard from 'Dashboard';
import CategoryTableList from 'CategoryTableList';
import DataVisualization from 'DataVisualization';
import DocumentProfile from 'DocumentProfile';


// App css
import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/bootstrap-reset.css';
import './styles/css/animate.css';
import './styles/assets/sweet-alert/sweet-alert.min.css';
import './styles/css/style.css';
import './styles/css/helper.css';
import 'style!css!sass!applicationStyles';




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Dashboard}/>
      <Route path="categorylist/:category" component={CategoryTableList}/>
      <Route path="dataVisualization/:category" component={DataVisualization}/>
      <Route path="documentprofile" component={DocumentProfile}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
