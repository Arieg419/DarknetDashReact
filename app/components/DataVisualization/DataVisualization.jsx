import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';
import Chart from 'chart.js';
import GoogleMap from 'GoogleMap';
var PieChart = require("react-chartjs").Pie;

var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
};

var markers = [
  {
      position: {
        lat: 40.650,
        lng: -73.949,
      },
      key: `Brooklyn`,
      defaultAnimation: 2
   },
   {
      position: {
        lat: 40.6944,
        lng: -73.9213,
      },
      key: `Bushwick`,
      defaultAnimation: 2,
   },
   {
      position: {
        lat: 40.7282,
        lng: -74.0776,
      },
      key: `Jersey City`,
      defaultAnimation: 2,
   }
];

var pieOptions = {
            animatable: true,
};

var pieData = [
              {
                  value: 300,
                  color:"#F7464A",
                  highlight: "#FF5A5E",
                  label: "Red"
              },
              {
                  value: 50,
                  color: "#46BFBD",
                  highlight: "#5AD3D1",
                  label: "Green"
              },
              {
                  value: 100,
                  color: "#FDB45C",
                  highlight: "#FFC870",
                  label: "Yellow"
              },
              {
                  value: 40,
                  color: "#949FB1",
                  highlight: "#A8B3C5",
                  label: "Grey"
              },
              {
                  value: 120,
                  color: "#4D5360",
                  highlight: "#616774",
                  label: "Dark Grey"
              }
];

// Chart Scripts


var DataVisualization = React.createClass({

  render: function () {
    
    return (
        <div>
            <section className="content">
                <div className="wraper container-fluid">
                    <div className="page-title"> 
                        <h3 className="title">Chartjs</h3> 
                    </div>


                 <div className="row">
                
                    <div className="col-lg-12 centerText">
                        <div className="portlet">
                            <div className="portlet-heading">
                                <h3 className="portlet-title text-dark">
                                    Stacked Area Chart
                                </h3>
                                <div className="portlet-widgets">
                                    <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></a>
                                    <span className="divider"></span>
                                    <a data-toggle="collapse" data-parent="#accordion1" href="#portlet4"><i className="ion-minus-round"></i></a>
                                    <span className="divider"></span>
                                    <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div id="portlet4" className="panel-collapse collapse in">
                                <div className="portlet-body">
                                <Sparklines data={[11,22,2,45,32,65]}>
                                    <SparklinesLine color="#253e56" />
                                </Sparklines>
                                </div>
                            </div>
                        </div> 
                    </div>
                
                </div> 

                <div className="row">
                
                    <div className="col-lg-6 centerText">
                        <div className="portlet">
                            <div className="portlet-heading">
                                <h3 className="portlet-title text-dark">
                                    Stacked Area Chart
                                </h3>
                                <div className="portlet-widgets">
                                    <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></a>
                                    <span className="divider"></span>
                                    <a data-toggle="collapse" data-parent="#accordion1" href="#portlet4"><i className="ion-minus-round"></i></a>
                                    <span className="divider"></span>
                                    <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div id="portlet4" className="panel-collapse collapse in">
                                <div className="portlet-body">
                                <PieChart data={pieData} options={pieOptions}/>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="col-lg-6 centerText">
                        <div className="portlet">
                            <div className="portlet-heading">
                                <h3 className="portlet-title text-dark">
                                    Stacked Area Chart
                                </h3>
                                <div className="portlet-widgets">
                                    <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></a>
                                    <span className="divider"></span>
                                    <a data-toggle="collapse" data-parent="#accordion1" href="#portlet4"><i className="ion-minus-round"></i></a>
                                    <span className="divider"></span>
                                    <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div  className="panel-collapse collapse in">
                                <div className="portlet-body">
                                <PieChart data={pieData} options={pieOptions} />
                                </div>
                            </div>
                        </div> 
                    </div>

                  </div>

                  <div className="row">
                  <div className="col-lg-12 centerText">
                        <div className="portlet">
                            <div className="portlet-heading">
                                <h3 className="portlet-title text-dark">
                                    Regions of Interest
                                </h3>
                                <div className="portlet-widgets">
                                    <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></a>
                                    <span className="divider"></span>
                                    <a data-toggle="collapse" data-parent="#accordion1" href="#portlet4"><i className="ion-minus-round"></i></a>
                                    <span className="divider"></span>
                                    <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div  className="panel-collapse collapse in">
                                <div className="portlet-body">
                                  <div className="Atribe">
                                    <GoogleMap className="YOLO" lon={-74.00} lat={40.71} markers={markers}/>
                                  </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                  </div>

                
                </div> 

            </section>
        </div>
    );
  }
});

module.exports = DataVisualization;