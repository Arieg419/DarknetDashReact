import React from 'react';
var PieChart = require("react-chartjs").Pie;

var pieOptions = {
            animatable: true,
};


var CategoricalEntity = (props) => {
    var pieData;
    switch(props.category) {
            case("terror"):
              pieData = [
                {value: 300, color:"#F13C6E", highlight: "#FF5A5E", label: "Severe"},
                {value: 50, color: "#E4BB40", highlight: "#FFC870",label: "Elevated"},
                {value: 100, color: "#3BC0C3", highlight: "#5AD3D1", label: "High"},
                {value: 40, color: "#615CA8", highlight: "#A8B3C5", label: "Guarded"},
                {value: 120, color: "#1A2942", highlight: "#616774",label: "Low"}
              ];
              break;
            case("narcotics"):
              pieData = [
                {value: 300, color:"#F13C6E", highlight: "#FF5A5E", label: "Severe"},
                {value: 50, color: "#E4BB40", highlight: "#FFC870",label: "Elevated"},
                {value: 100, color: "#3BC0C3", highlight: "#5AD3D1", label: "High"},
                {value: 40, color: "#615CA8", highlight: "#A8B3C5", label: "Guarded"},
                {value: 120, color: "#1A2942", highlight: "#616774",label: "Low"}
              ];           
              break;
            case("trafficking"):
              pieData = [
                {value: 300, color:"#F13C6E", highlight: "#FF5A5E", label: "Severe"},
                {value: 50, color: "#E4BB40", highlight: "#FFC870",label: "Elevated"},
                {value: 100, color: "#3BC0C3", highlight: "#5AD3D1", label: "High"},
                {value: 40, color: "#615CA8", highlight: "#A8B3C5", label: "Guarded"},
                {value: 120, color: "#1A2942", highlight: "#616774",label: "Low"}
              ];
              break;
            case("weapons"):
              pieData = [
                {value: 300, color:"#F13C6E", highlight: "#FF5A5E", label: "Severe"},
                {value: 50, color: "#E4BB40", highlight: "#FFC870",label: "Elevated"},
                {value: 100, color: "#3BC0C3", highlight: "#5AD3D1", label: "High"},
                {value: 40, color: "#615CA8", highlight: "#A8B3C5", label: "Guarded"},
                {value: 120, color: "#1A2942", highlight: "#616774",label: "Low"}
              ];
              break;
    }

    return (
          <div className="col-lg-6 centerText">
	            <div className="portlet">
	                <div className="portlet-heading">
	                    <h3 className="portlet-title text-dark">
	                        Document Threat Levels
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
	                    <PieChart data={pieData} options={pieOptions}/>
	                    </div>
	                </div>
	            </div> 
        	</div>
    );
};

module.exports = CategoricalEntity;