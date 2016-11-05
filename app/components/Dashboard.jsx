import React from 'react';
import {Link, IndexLink} from 'react-router';


import 'script!omeradded/waypoints.min.js';
import 'script!omeradded/jquery.counterup.min.js';
import 'script!omeradded/skycons.min.js';
import 'script!omeradded/inline.js';
import 'script!../styles/assets/sparkline-chart/jquery.sparkline.min.js';
import 'script!../styles/assets/sparkline-chart/chart-sparkline.js';


var Dashboard = React.createClass({

  render: function () {
    return (
        <div>
            <section className="content">
                <div className="wraper container-fluid">

                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="portlet">
                                        <div className="portlet-heading">
                                            <h3 className="portlet-title text-dark text-uppercase">
                                                Weekly Threat Report
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
                                            <div className="portlet-body">
                                                <div id="morris-bar-example"></div>

                                                <div className="row text-center m-t-30 m-b-30">
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>$ 126</h4>
                                                        <small className="text-muted"> Today's Threat</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>$ 967</h4>
                                                        <small className="text-muted">This Week's Threat</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>$ 4500</h4>
                                                        <small className="text-muted">This Month's Threat</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>$ 87,000</h4>
                                                        <small className="text-muted">This Year's Threat</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 

                                </div>


                                <div className="col-lg-6">
                                    <div className="portlet">
                                        <div className="portlet-heading">
                                            <h3 className="portlet-title text-dark text-uppercase">
                                                Yearly Crime Report
                                            </h3>
                                            <div className="portlet-widgets">
                                                <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></a>
                                                <span className="divider"></span>
                                                <a data-toggle="collapse" data-parent="#accordion1" href="#portlet2"><i className="ion-minus-round"></i></a>
                                                <span className="divider"></span>
                                                <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div id="portlet2" className="panel-collapse collapse in">
                                            <div className="portlet-body">
                                                <div id="morris-area-example"></div>
                                                
                                                <div className="row text-center m-t-30 m-b-30">
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>$ 126</h4>
                                                        <small className="text-muted"> Today's Crime</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>$ 967</h4>
                                                        <small className="text-muted">This Week's Crime</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>$ 4500</h4>
                                                        <small className="text-muted">This Month's Crime</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>$ 87,000</h4>
                                                        <small className="text-muted">This Year's Crime</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                </div>

                                
                            </div> 


                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="tile-stats white-bg"> 
                                        <div className="status">
                                            <h3 className="m-t-0"><span className="counter">25</span>% more</h3> 
                                            <p>Monthly visitor statistics</p>
                                        </div> 
                                        <div className="chart-inline">
                                            <span className="inlinesparkline"></span> 
                                        </div>
                                    </div> 
                                </div>

                                <div className="col-lg-3 col-sm-6">
                                    <div className="tile-stats white-bg"> 
                                        <div className="status">
                                            <h3 className="m-t-0 counter">49</h3> 
                                            <p>Avg. Crime per day</p>
                                        </div> 
                                        <span className="dynamicbar-big"></span> 
                                    </div> 
                                </div>

                                <div className="col-lg-3 col-sm-6">
                                    <div className="tile-stats white-bg"> 
                                        <div className="status">
                                            <h3 className="m-t-0 counter">0.9</h3> 
                                            <p>Stock Market</p>
                                        </div> 
                                        <span id="compositeline"></span> 
                                    </div>
                                </div>

                                <div className="col-lg-3 col-sm-6">
                                    <div className="tile-stats white-bg"> 
                                        <div className="col-sm-8">
                                            <div className="status">
                                            <h3 className="m-t-15"><span className="counter">91.5</span>%</h3> 
                                            <p>US Dollar Share</p>
                                        </div> 
                                        </div>
                                        <div className="col-sm-4 m-t-20">
                                            <span className="sparkpie-big"></span> 
                                        </div>
                                    </div> 
                                </div>
                            </div>

                      
                            <div className="row">
                                
                                <div className="col-lg-12">

                                    <div className="portlet">
                                        <div className="portlet-heading">
                                            <h3 className="portlet-title text-dark text-uppercase">
                                                Projects
                                            </h3>
                                            <div className="portlet-widgets">
                                                <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></a>
                                                <span className="divider"></span>
                                                <a data-toggle="collapse" data-parent="#accordion1" href="#portlet2"><i className="ion-minus-round"></i></a>
                                                <span className="divider"></span>
                                                <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div id="portlet2" className="panel-collapse collapse in">
                                            <div className="portlet-body">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Project Name</th>
                                                                <th>Start Date</th>
                                                                <th>Due Date</th>
                                                                <th>Status</th>
                                                                <th>Assign</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Darknet Admin </td>
                                                                <td>01/01/2015</td>
                                                                <td>26/04/2015</td>
                                                                <td><span className="label label-info">Released</span></td>
                                                                <td>Coderthemes</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Darknet Frontend v1</td>
                                                                <td>01/01/2015</td>
                                                                <td>26/04/2015</td>
                                                                <td><span className="label label-success">Released</span></td>
                                                                <td>Coderthemes</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Darknet Admin v1.1</td>
                                                                <td>01/05/2015</td>
                                                                <td>10/05/2015</td>
                                                                <td><span className="label label-pink">Pending</span></td>
                                                                <td>Coderthemes</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>Darknet Frontend v1.1</td>
                                                                <td>01/01/2015</td>
                                                                <td>31/05/2015</td>
                                                                <td><span className="label label-purple">Work in Progress</span></td>
                                                                <td>Coderthemes</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>Darknet Admin v1.3</td>
                                                                <td>01/01/2015</td>
                                                                <td>31/05/2015</td>
                                                                <td><span className="label label-warning">Coming soon</span></td>
                                                                <td>Coderthemes</td>
                                                            </tr>

                                                            <tr>
                                                                <td>6</td>
                                                                <td>Darknet Admin v1.3</td>
                                                                <td>01/01/2015</td>
                                                                <td>31/05/2015</td>
                                                                <td><span className="label label-primary">Coming soon</span></td>
                                                                <td>Coderthemes</td>
                                                            </tr>

                                                            <tr>
                                                                <td>7</td>
                                                                <td>Darknet Admin v1.3</td>
                                                                <td>01/01/2015</td>
                                                                <td>31/05/2015</td>
                                                                <td><span className="label label-info">Cool</span></td>
                                                                <td>Coderthemes</td>
                                                            </tr>

                                                            <tr>
                                                                <td>8</td>
                                                                <td>Darknet Admin v1.3</td>
                                                                <td>01/01/2015</td>
                                                                <td>31/05/2015</td>
                                                                <td><span className="label label-warning">Coming soon</span></td>
                                                                <td>Coderthemes</td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>
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

module.exports = Dashboard;