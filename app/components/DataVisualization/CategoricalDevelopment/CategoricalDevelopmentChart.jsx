var React = require('react');
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';

var CategoricalDevelopment = (props) => {
    var data;
    switch(props.category) {
        case("terror"):
            data = [1,4,9,11];
            break;
        case("narcotics"):
            data = [4,8,11,13];
            break;
        case("trafficking"):
            data = [3,8,10,11];
            break;
        case("weapons"):
            data = [3,8,10,11];
            break;
    }
    return (
        <div className="row">                
            <div className="col-lg-12 centerText">
                <div className="portlet">
                    <div className="portlet-heading">
                        <h3 className="portlet-title text-dark">
                            Cumalated Threats
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
                    <div id="portlet4" className="panel-collapse collapse in">
                        <div className="portlet-body">
                        <Sparklines data={data}>
                            <SparklinesLine color="#AA73C3" />
                        </Sparklines>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    );
};

module.exports = CategoricalDevelopment;

