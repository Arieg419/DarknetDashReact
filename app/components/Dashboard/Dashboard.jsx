import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';

import 'script!omeradded/waypoints.min.js';
import 'script!omeradded/jquery.counterup.min.js';
import 'script!omeradded/skycons.min.js';
import 'script!omeradded/inline.js';

// Import Statid Data for Dynamic Render Testing
import Data from '../testData.json';
import SevereThreats from 'SevereThreats';

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
                                                Cumulated Threats
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
                                                <Sparklines  data={[8,20,29, 35]}>
                                                    <SparklinesLine color="#FCB274" />
                                                </Sparklines>

                                                <div className="row text-center m-t-30 m-b-30">
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>8</h4>
                                                        <small className="text-muted">October, 2016</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>20</h4>
                                                        <small className="text-muted">November, 2016</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>29</h4>
                                                        <small className="text-muted">December, 2016</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4>35</h4>
                                                        <small className="text-muted">January, 2017</small>
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
                                                Category Averages
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
                                                <Sparklines data={[-3.8,-3.2,-4.37, -9]}>
                                                  <SparklinesBars color="#86C98B" style={{fill: "#86C98B"}}/>
                                                </Sparklines>
                                                
                                                <div className="row text-center m-t-30 m-b-30">
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 3.8</h4>
                                                        <small className="text-muted">Terrorism</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 3.2</h4>
                                                        <small className="text-muted">Narcotics</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 4.37</h4>
                                                        <small className="text-muted">Human Trafficking</small>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6">
                                                        <h4> 6.2</h4>
                                                        <small className="text-muted">Weapons</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                </div>

                                
                            </div> 


                            <CategoryDisplayList categories={Data.Categories} />

                            <TopThreatList data={SevereThreats()} />

                      
                             
                </div>
            </section>
        </div>
    );
  }
});

module.exports = Dashboard;