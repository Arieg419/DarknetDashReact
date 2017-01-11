import React from 'react';
import {Link, IndexLink} from 'react-router';
var PieChart = require("react-chartjs").Pie;

// My components
import GoogleMap from 'GoogleMap';
import CategoricalDevelopment from 'CategoricalDevelopment';
import CategoricalEntityChart from 'CategoricalEntityChart';
import CategoricalSentimentChart from 'CategoricalSentimentChart';
import CategoricalRegions from 'CategoricalRegions';



var DataVisualization = React.createClass({


  render: function () {

    {   
        const { params } = this.props;
        const { category } = params;
        console.log(category);
    }
    
    return (
        <div>
            <section className="content">
                <div className="wraper container-fluid">
                    <div className="page-title"> 
                        <h3 className="title">Visializing Weapon Trafficking Data</h3> 
                    </div>
                    <CategoricalDevelopment /> 
                    <div className="row">
                      <CategoricalEntityChart />
                      <CategoricalSentimentChart />  
                    </div>
                    <CategoricalRegions/> 
                </div> 
            </section>
        </div>
    );
  }
});

module.exports = DataVisualization;