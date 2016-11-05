var React = require('react');
var {Link, IndexLink} = require('react-router');

var Aside = () => {
  return (
        <aside className="left-panel">

            <div className="logo">
                <a href="index.html" className="logo-expanded">
                    <i className="ion-social-buffer"></i>
                    <span className="nav-label">Darknet Dash</span>
                </a>
            </div>
        
            <nav className="navigation">
                <ul className="list-unstyled">
                    <li className="has-submenu"><a href="#"><i className="zmdi zmdi-view-dashboard"></i> <span className="nav-label">Dashboard</span><span className="menu-arrow"></span></a>
                        <ul className="list-unstyled">
                            <Link to="/"><li><i></i> <span>Home</span></li></Link>
                        </ul>
                    </li>
                    <li className="has-submenu"><a href="#"><i className="zmdi zmdi-format-list-bulleted"></i> <span className="nav-label">Data Tables</span><span className="menu-arrow"></span></a>
                        <ul className="list-unstyled">
                            <Link to="/categorylist"><li><i></i> <span>Terrorism</span></li></Link>
                            <Link to="/categorylist"><li><i></i> <span>Paedophilia</span></li></Link>
                            <Link to="/categorylist"><li><i></i> <span>Weapons</span></li></Link>
                            <Link to="/categorylist"><li><i></i> <span>Narcotics</span></li></Link>
                        </ul>
                    </li>
                    <li className="has-submenu"><a href="#"><i className="zmdi zmdi-chart"></i> <span className="nav-label">Data Visualization</span><span className="menu-arrow"></span></a>
                        <ul className="list-unstyled">
                            <Link to="/datavisualization"><li><i></i> <span>Terrorism</span></li></Link>
                            <Link to="/datavisualization"><li><i></i> <span>Paedophilia</span></li></Link>
                            <Link to="/datavisualization"><li><i></i> <span>Weapons</span></li></Link>
                            <Link to="/datavisualization"><li><i></i> <span>Narcotics</span></li></Link>
                        </ul>
                    </li>

                    
                    <li className="has-submenu"><a href="#"><i className="zmdi zmdi-map"></i> <span className="nav-label">Maps</span><span className="menu-arrow"></span></a>
                        <ul className="list-unstyled">
                            <li><a href="maps-google.html"> Google Map</a></li>
                            <li><a href="maps-vector.html"> Vector Map</a></li>
                        </ul>
                    </li>
                    <li className="has-submenu"><a href="#"><i className="zmdi zmdi-collection-item"></i> <span className="nav-label">Pages</span><span className="menu-arrow"></span></a>
                        <ul className="list-unstyled">
                            <li><a href="pages-profile.html">Profile</a></li>
                            <li><a href="pages-timeline.html">Timeline</a></li>
                            <li><a href="pages-invoice.html">Invoice</a></li>
                            <li><a href="pages-contact.html">Contact-list</a></li>
                            <li><a href="pages-login.html">Login</a></li>
                            <li><a href="pages-register.html">Register</a></li>
                            <li><a href="pages-recoverpw.html">Recover Password</a></li>
                            <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                            <li><a href="pages-blank.html">Blank Page</a></li>
                            <li><a href="pages-404.html">404 Error</a></li>
                            <li><a href="pages-404_alt.html">404 alt</a></li>
                            <li><a href="pages-500.html">500 Error</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
                
        </aside>
  );
};

module.exports = Aside;
