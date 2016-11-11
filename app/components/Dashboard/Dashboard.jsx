import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';

import 'script!omeradded/waypoints.min.js';
import 'script!omeradded/jquery.counterup.min.js';
import 'script!omeradded/skycons.min.js';
import 'script!omeradded/inline.js';

// Import Statid Data for Dynamic Render Testing
import Data from '../testData.json';

// Import Page Specific Components
import TopThreatList from 'TopThreatList';
import CategoryDisplayList from 'CategoryDisplayList';

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
                                                <Sparklines  data={[11,22,2,45,32,65]}>
                                                    <SparklinesLine />
                                                    <SparklinesReferenceLine type="avg" />
                                                </Sparklines>

                                                <div className="row text-center m-t-30 m-b-30">
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 126</h4>
                                                        <small className="text-muted"> Today's Threat</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 967</h4>
                                                        <small className="text-muted">This Week's Threat</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 4500</h4>
                                                        <small className="text-muted">This Month's Threat</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 87,000</h4>
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
                                                <Sparklines data={[59, 12, 2, 70,24,32,63]}>
                                                  <SparklinesBars />
                                                </Sparklines>
                                                
                                                <div className="row text-center m-t-30 m-b-30">
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 126</h4>
                                                        <small className="text-muted"> Today's Crime</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 967</h4>
                                                        <small className="text-muted">This Week's Crime</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 4500</h4>
                                                        <small className="text-muted">This Month's Crime</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 87,000</h4>
                                                        <small className="text-muted">This Year's Crime</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                </div>

                                
                            </div> 


                            <CategoryDisplayList categories={Data.Categories} />

                            <TopThreatList data={Data.Documents} />

                      
                             
                </div>
            </section>
        </div>
    );
  }
});

module.exports = Dashboard;