// Components and Libraries
import React from 'react';
var PieChart = require("react-chartjs").Pie;

// Utils
import FetchData from 'FetchData';
import EmotionCalculator from 'EmotionCalculator';

var pieOptions = {
            animatable: true,
};


var CategoricalEmotion = (props) => {
    var pieData, data, res;
    switch(props.category) {
            case("terror"):
              data = FetchData.getTerror();
              res = EmotionCalculator(data);
              pieData = [
                {value: res[0], color:"#F08390", highlight: "#FDEDEF", label: "Anger"},
                {value: res[1], color: "#FA7E18", highlight: "#FCB072",label: "Disgust"},
                {value: res[2], color: "#79C37E", highlight: "#ACDAAF", label: "Fear"},
                {value: res[3], color: "#218EDC", highlight: "#E8F4FC", label: "Joy"},
                {value: res[4], color: "#9956B6", highlight: "#F4ECF7",label: "Sadness"}
              ];
              break;
            case("narcotics"):
              data = FetchData.getNarcotics();
              res = EmotionCalculator(data);
              pieData = [
                {value: res[0], color:"#F08390", highlight: "#FDEDEF", label: "Anger"},
                {value: res[1], color: "#FA7E18", highlight: "#FCB072",label: "disgust"},
                {value: res[2], color: "#79C37E", highlight: "#ACDAAF", label: "Fear"},
                {value: res[3], color: "#218EDC", highlight: "#E8F4FC", label: "Joy"},
                {value: res[4], color: "#9956B6", highlight: "#F4ECF7",label: "Sadness"}
              ];           
              break;
            case("trafficking"):
              data = FetchData.getTrafficking();
              res = EmotionCalculator(data);
              pieData = [
                {value: res[0], color:"#F08390", highlight: "#FDEDEF", label: "Anger"},
                {value: res[1], color: "#FA7E18", highlight: "#FCB072",label: "disgust"},
                {value: res[2], color: "#79C37E", highlight: "#ACDAAF", label: "Fear"},
                {value: res[3], color: "#218EDC", highlight: "#E8F4FC", label: "Joy"},
                {value: res[4], color: "#9956B6", highlight: "#F4ECF7",label: "Sadness"}
              ];
              break;
            case("weapons"):
              data = FetchData.getNarcotics();
              res = EmotionCalculator(data);
              pieData = [
                {value: res[0], color:"#F08390", highlight: "#FDEDEF", label: "Anger"},
                {value: res[1], color: "#FA7E18", highlight: "#FCB072",label: "disgust"},
                {value: res[2], color: "#79C37E", highlight: "#ACDAAF", label: "Fear"},
                {value: res[3], color: "#218EDC", highlight: "#E8F4FC", label: "Joy"},
                {value: res[4], color: "#9956B6", highlight: "#F4ECF7",label: "Sadness"}
              ];
              break;
    }

    return (
          <div className="col-lg-6 centerText">
              <div className="portlet">
                  <div className="portlet-heading">
                      <h3 className="portlet-title text-dark">
                          Emotional Analytics Average for {props.category}
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

module.exports = CategoricalEmotion;