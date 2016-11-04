var React = require('react');
var {Link, IndexLink} = require('react-router');

import Dashboard from 'Dashboard';

var Navigation = () => {
  return (
            
            <header className="top-head container-fluid">
                <button type="button" className="navbar-toggle pull-left">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                
                <form role="search" className="navbar-left app-search pull-left hidden-xs">
                  <input type="text" placeholder="Search..." className="form-control"/>
                  <a href=""><i className="fa fa-search"></i></a>
                </form>
                
                <nav className=" navbar-default" role="navigation">
                    

                    <ul className="nav navbar-nav navbar-right top-menu top-right-menu">  

                        <li className="dropdown text-center">
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <img alt="" src="img/dashpic.jpg" className="img-circle profile-img thumb-sm"/>
                                <span className="username">Omer Goldberg </span> <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu pro-menu fadeInUp animated settings-bar" tabIndex="5003">
                                <li><a href="profile.html"><i className="fa fa-briefcase"></i>Profile</a></li>
                                <li><a href="#"><i className="fa fa-cog"></i> Settings</a></li>
                                <li><a href="#"><i className="fa fa-bell"></i> Friends <span className="label label-info pull-right mail-info">5</span></a></li>
                                <li><a href="#"><i className="fa fa-sign-out"></i> Log Out</a></li>
                            </ul>
                        </li>
                    
                    </ul>
                    
                </nav>


            </header>
            
  );
};

module.exports = Navigation;
