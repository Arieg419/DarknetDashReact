var React = require('react');
var {Link, IndexLink} = require('react-router');
var imgUrl = 'img/terrorism-2.jpg';
var divStyle = {
  backgroundImage: 'url(' + imgUrl + ')'
};

var DocumentProfile = () => {
  return (
    <div>
        <section className="content">
            <div className="wraper container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="bg-picture" style={divStyle}>
                          <span className="bg-picture-overlay"></span>
                          <div className="box-layout meta bottom">
                            <div className="col-sm-6 clearfix">
                              <span className="img-wrapper pull-left m-r-15"><img src="img/terrorist.jpg" alt="" styles={{width:"64px"}} className="br-radius"/></span>
                              <div className="media-body">
                                <h3 className="text-white mb-2 m-t-10 ellipsis">Rebellion in Yemen</h3>
                                <h5 className="text-white"> 7.3</h5>
                              </div>
                            </div>
                            <div className="col-sm-6">

                              <div className="pull-right">
                                <div className="dropdown">
                                    <a data-toggle="dropdown" className="dropdown-toggle btn btn-primary" href="#"> Following <span className="caret"></span></a>
                                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                        <li><a href="#">Poke</a></li>
                                        <li><a href="#">Private message</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Unfollow</a></li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="row m-t-30">
                    <div className="col-sm-12">
                        <div className="panel panel-default p-0">
                            <div className="panel-body p-0"> 
                                <ul className="nav nav-tabs profile-tabs">
                                    <li className="active"><a data-toggle="tab" href="#aboutme">Meta Data</a></li>
                                    <li className=""><a data-toggle="tab" href="#user-activities">Entity Analytics</a></li>
                                    <li className=""><a data-toggle="tab" href="#edit-profile">Sentiment Analytics</a></li>
                                    <li className=""><a data-toggle="tab" href="#projects">Links found</a></li>
                                </ul>

                                <div className="tab-content m-0"> 

                                    <div id="aboutme" className="tab-pane active">
                                    <div className="profile-desk">
                                        <h1>Rebellion in Yemen</h1>
                                        <span className="designation">Dark Net, Rebellion, Yemen</span>
                                        <p>
                                            This document was found on the dark net. Etc. This document was found on the dark net. Etc. This document was found on the dark net. Etc.
                                        </p>
                                        <a className="btn btn-primary m-t-20" href="#"> <i className="fa fa-check"></i> Following</a>

                                        <table className="table table-condensed">
                                            <thead>
                                                <tr>
                                                    <th colSpan="3"><h3>Document Information</h3></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><b>Url</b></td>
                                                    <td>
                                                    <a href="#" className="ng-binding">
                                                        www.example.com
                                                    </a></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Date Found</b></td>
                                                    <td>
                                                    <a href="" className="ng-binding">
                                                        01/01/2017
                                                    </a></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Overall Ranking</b></td>
                                                    <td className="ng-binding">7.2</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </div> 


                                <div id="user-activities" className="tab-pane">
                                    <div className="timeline-2">
                                        <div className="time-item">
                                            <div className="item-info">
                                                <div className="text-muted">5 minutes ago</div>
                                                <p><strong><a href="#" className="text-info">John Doe</a></strong> Uploaded a photo <strong>"DSC000586.jpg"</strong></p>
                                            </div>
                                        </div>

                                        <div className="time-item">
                                            <div className="item-info">
                                                <div className="text-muted">30 minutes ago</div>
                                                <p><a href="" className="text-info">Lorem</a> commented your post.</p>
                                                <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod. "</em></p>
                                            </div>
                                        </div>

                                        <div className="time-item">
                                            <div className="item-info">
                                                <div className="text-muted">59 minutes ago</div>
                                                <p><a href="" className="text-info">Jessi</a> attended a meeting with<a href="#" className="text-success">John Doe</a>.</p>
                                                <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod. "</em></p>
                                            </div>
                                        </div>

                                        <div className="time-item">
                                            <div className="item-info">
                                                <div className="text-muted">5 minutes ago</div>
                                                <p><strong><a href="#" className="text-info">John Doe</a></strong>Uploaded 2 new photos</p>
                                            </div>
                                        </div>

                                        <div className="time-item">
                                            <div className="item-info">
                                                <div className="text-muted">30 minutes ago</div>
                                                <p><a href="" className="text-info">Lorem</a> commented your post.</p>
                                                <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod. "</em></p>
                                            </div>
                                        </div>

                                        <div className="time-item">
                                            <div className="item-info">
                                                <div className="text-muted">59 minutes ago</div>
                                                <p><a href="" className="text-info">Jessi</a> attended a meeting with<a href="#" className="text-success">John Doe</a>.</p>
                                                <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod. "</em></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div id="edit-profile" className="tab-pane">
                                    <div className="user-profile-content">
                                        
                                    </div>
                                </div>


                                
                                <div id="projects" className="tab-pane">
                                    <div className="row m-t-10">
                                        <div className="col-md-12">
                                            <div className="portlet"> 
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
                                                                        <td>Velonic Admin</td>
                                                                        <td>01/01/2015</td>
                                                                        <td>07/05/2015</td>
                                                                        <td><span className="label label-info">Work in Progress</span></td>
                                                                        <td>Coderthemes</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>Velonic Frontend</td>
                                                                        <td>01/01/2015</td>
                                                                        <td>07/05/2015</td>
                                                                        <td><span className="label label-success">Pending</span></td>
                                                                        <td>Coderthemes</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>Velonic Admin</td>
                                                                        <td>01/01/2015</td>
                                                                        <td>07/05/2015</td>
                                                                        <td><span className="label label-pink">Done</span></td>
                                                                        <td>Coderthemes</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>4</td>
                                                                        <td>Velonic Frontend</td>
                                                                        <td>01/01/2015</td>
                                                                        <td>07/05/2015</td>
                                                                        <td><span className="label label-purple">Work in Progress</span></td>
                                                                        <td>Coderthemes</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>5</td>
                                                                        <td>Velonic Admin</td>
                                                                        <td>01/01/2015</td>
                                                                        <td>07/05/2015</td>
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
                            </div>
             
                        </div> 
                    </div>
                </div>
            </div>
            


            </div>
        </section>
    </div>
  );
};

module.exports = DocumentProfile;


