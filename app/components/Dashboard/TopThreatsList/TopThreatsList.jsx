var React = require('react');

import TopThreatsListItem from 'TopThreatsListItem';

var TopThreatList = (props) => {
    console.log("new data is...");
    console.log(props.data);
    return (
        <div className="row">                       
            <div className="col-lg-12">

                <div className="portlet">
                    <div className="portlet-heading">
                        <h3 className="portlet-title text-dark text-uppercase">
                            Severe Threats Analyzed
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
                                        <tbody>
                                        <tr>
                                            <th>#</th>
                                            <th>Document Name</th>
                                            <th>Discovery Date</th>
                                            <th>Dark / Clear</th>
                                            <th>Overall Score</th>
                                            <th>URL</th>
                                        </tr>
                                        </tbody>
                                        <TopThreatsListItem threats={props.data} />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div> 
    );
};

module.exports = TopThreatList;

