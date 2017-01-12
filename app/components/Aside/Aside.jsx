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
                            <Link to="/categorylist/Terror"><li><i></i> <span>Terrorism</span></li></Link>
                            <Link to="/categorylist/Trafficking"><li><i></i> <span>Trafficking</span></li></Link>
                            <Link to="/categorylist/Weapons"><li><i></i> <span>Weapons</span></li></Link>
                            <Link to="/categorylist/Narcotics"><li><i></i> <span>Narcotics</span></li></Link>
                        </ul>
                    </li>
                    <li className="has-submenu"><a href="#"><i className="zmdi zmdi-chart"></i> <span className="nav-label">Data Visualization</span><span className="menu-arrow"></span></a>
                        <ul className="list-unstyled">
                            <Link to="/dataVisualization/terror"><li><i></i> <span>Terrorism</span></li></Link>
                            <Link to="/dataVisualization/trafficking"><li><i></i> <span>Trafficking</span></li></Link>
                            <Link to="/dataVisualization/weapons"><li><i></i> <span>Weapons</span></li></Link>
                            <Link to="/dataVisualization/narcotics"><li><i></i> <span>Narcotics</span></li></Link>
                        </ul>
                    </li>

                    <li className="has-submenu"><a href="#"><i className="zmdi zmdi-chart"></i> <span className="nav-label">Document Profile</span><span className="menu-arrow"></span></a>
                        <ul className="list-unstyled">
                            <Link to="/documentprofile"><li><i></i> <span>Terrorism</span></li></Link>
                            <Link to="/documentprofile"><li><i></i> <span>Trafficking</span></li></Link>
                            <Link to="/documentprofile"><li><i></i> <span>Weapons</span></li></Link>
                            <Link to="/documentprofile"><li><i></i> <span>Narcotics</span></li></Link>
                        </ul>
                    </li>

                </ul>
            </nav>
                
        </aside>
  );
};

module.exports = Aside;
