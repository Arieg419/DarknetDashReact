// React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// App Components
import Main from 'Main';
import Navigation from 'Navigation';
import Dashboard from 'Dashboard';
import CategoryList from 'CategoryList';
import DataVisualization from 'DataVisualization';


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
      <Route path="categorylist" component={CategoryList}/>
      <Route path="datavisualization" component={DataVisualization}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
