import React from 'react';
import {Link, IndexLink} from 'react-router';

// Utils
import FetchData from 'FetchData';
import docRank from 'DocRank';

// My Components
import CategoricalEntityChart from 'CategoricalEntityChart';
import CategoricalSentimentChart from 'CategoricalSentimentChart';
import DocumentProfileProgressBar from  'DocumentProfileProgressBar';
import DocumentProfileSentimentBreakdown from  'DocumentProfileSentimentBreakdown';
import DocumentProfileEmotionBreakdown from 'DocumentProfileEmotionBreakdown';

var divStyle, imgUrl, profileimg;


var DocumentProfile = (props) => {
  var data;
  var score = 0;
  switch(props.params.category) {
      case "Terror":
        var dataArr = FetchData.getTerror();
        dataArr.forEach((doc) => {
            if(doc.title === props.params.doc) {
                data = doc;
                score = docRank(doc, doc.overAllScore);   
            }
        });
        imgUrl = 'img/isis.jpg';
        divStyle = {
          backgroundImage: 'url(' + imgUrl + ')'
        };
        profileimg = {
            profile: 'img/terrorist.jpg'
        };
        break;
      case "Trafficking":
        var dataArr = FetchData.getTrafficking();
        dataArr.forEach((doc) => {
            if(doc.title === props.params.doc) {
                data = doc;  
                score = docRank(doc, doc.overAllScore);
            } 
        });
        imgUrl = 'img/trafficking.jpeg';
        divStyle = {
          backgroundImage: 'url(' + imgUrl + ')'
        };
        profileimg = {
            profile: 'img/htr.jpg'
        };
        break;
      case "Weapons":
        var dataArr = FetchData.getNarcotics();
        dataArr.forEach((doc) => {
            if(doc.title === props.params.doc) {
                data = doc;  
                score = docRank(doc, doc.overAllScore);
            } 
        });
        imgUrl = 'img/gun.jpeg';
        divStyle = {
          backgroundImage: 'url(' + imgUrl + ')'
        };
        profileimg = {
            profile: 'img/weaponsprof'
        };
        break;
      case "Narcotics":
        var dataArr = FetchData.getNarcotics();
        dataArr.forEach((doc) => {
            if(doc.title === props.params.doc) {
                data = doc;
                score = docRank(doc, doc.overAllScore);
            }
        });
        imgUrl = 'img/pills.jpg';
        divStyle = {
          backgroundImage: 'url(' + imgUrl + ')'
        };
        profileimg = {
            profile: 'img/walter.jpg'
        };
        break;
    }

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
                              <span className="img-wrapper pull-left m-r-15"><img src={profileimg.profile} alt="" styles={{width:"64px"}} className="br-radius"/></span>
                              <div className="media-body">
                                <h3 className="text-white mb-2 m-t-10 ellipsis">{data.title}</h3>
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
                                    <li className=""><a data-toggle="tab" href="#edit-profile">Sentiment Analytics</a></li>
                                </ul>

                                <div className="tab-content m-0"> 

                                    <div id="aboutme" className="tab-pane active">
                                    <div className="profile-desk">
                                        <h1>{data.title}</h1>
                                        <span className="designation">{data.entities.map((doc) => { var str = doc.type + " "; return str.toLowerCase(); })}</span>
                                        <p>
                                            { data.fromDark ? 'This article was found on the dark net' : 'This article was found on the clearnet'}
                                        </p>
                                        <a className="btn btn-primary m-t-20" href="#"> <i className="fa fa-check"></i> Analyzed</a>

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
                                                        {data.url}
                                                    </a></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Date Found</b></td>
                                                    <td>
                                                    <a href="" className="ng-binding">
                                                        {data.dateFound}
                                                    </a></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Overall Ranking</b></td>
                                                    <td className="ng-binding">-{score}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </div> 

                                
                                <div id="edit-profile" className="tab-pane">
                                    <div className="user-profile-content">
                                        <div className="row">
                                            <DocumentProfileProgressBar entities={data.entities} />
                                            <DocumentProfileSentimentBreakdown entities={data.entities} />
                                            <DocumentProfileEmotionBreakdown entities={data.entities} />
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


