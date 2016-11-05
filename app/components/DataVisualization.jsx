import React from 'react';
import {Link, IndexLink} from 'react-router';

// Chart JS 
// import 'script!../styles/assets/chartjs/chart.min.js';
// import 'script!../styles/assets/chartjs/chartjs.init.js';


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
                
                    <div className="col-lg-8">
                        <div className="portlet">
                            <div className="portlet-heading">
                                <h3 className="portlet-title text-dark">
                                    Line Chart
                                </h3>
                                <div className="portlet-widgets">
                                    <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></a>
                                    <span className="divider"></span>
                                    <a data-toggle="collapse" data-parent="#accordion1" href="#portlet1"><i className="ion-minus-round"></i></a>
                                    <span className="divider"></span>
                                    <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div id="portlet1" className="panel-collapse collapse in">
                                <div className="portlet-body chartJS">
                                    <canvas id="lineChart" data-type="Line" width="520" height="250"></canvas>
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