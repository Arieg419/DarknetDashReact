import React from 'react';
var PieChart = require("react-chartjs").Pie;

var pieOptions = {
            animatable: true,
};

var pieData = [
              {
                  value: 300,
                  color:"#F7464A",
                  highlight: "#FF5A5E",
                  label: "Red"
              },
              {
                  value: 50,
                  color: "#46BFBD",
                  highlight: "#5AD3D1",
                  label: "Green"
              },
              {
                  value: 100,
                  color: "#FDB45C",
                  highlight: "#FFC870",
                  label: "Yellow"
              },
              {
                  value: 40,
                  color: "#949FB1",
                  highlight: "#A8B3C5",
                  label: "Grey"
              },
              {
                  value: 120,
                  color: "#4D5360",
                  highlight: "#616774",
                  label: "Dark Grey"
              }
];

var CategoricalSentiment = (props) => {
    return (
	        <div className="col-lg-6 centerText">
	            <div className="portlet">
	                <div className="portlet-heading">
	                    <h3 className="portlet-title text-dark">
	                        Categorical Sentiment Analysis LOL
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

module.exports = CategoricalSentiment;