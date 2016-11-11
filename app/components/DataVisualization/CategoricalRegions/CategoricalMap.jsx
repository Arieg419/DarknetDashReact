var React = require('react');
import GoogleMap from 'GoogleMap';

var markers = [
  {
      position: {
        lat: 40.650,
        lng: -73.949,
      },
      key: `Brooklyn`,
      defaultAnimation: 2
   },
   {
      position: {
        lat: 40.6944,
        lng: -73.9213,
      },
      key: `Bushwick`,
      defaultAnimation: 2,
   },
   {
      position: {
        lat: 40.7282,
        lng: -74.0776,
      },
      key: `Jersey City`,
      defaultAnimation: 2,
   }
];

var CategoricalDevelopment = (props) => {
    return (
        <div className="row">
          <div className="col-lg-12 centerText">
                <div className="portlet">
                    <div className="portlet-heading">
                        <h3 className="portlet-title text-dark">
                            Regions of Interest
                        </h3>
                        <div className="portlet-widgets">
                            <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></a>
                            <span className="divider"></span>
                            <a data-toggle="collapse" data-parent="#accordion1" href="#portlet4"><i className="ion-minus-round"></i></a>
                            <span className="divider"></span>
                            <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div  className="panel-collapse collapse in">
                        <div className="portlet-body">
                          <div className="Atribe">
                            <GoogleMap className="YOLO" lon={-74.00} lat={40.71} markers={markers}/>
                          </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

module.exports = CategoricalDevelopment;
