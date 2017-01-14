import React from 'react';

const colors = {
  "anger": "text-warning",
  "disgust": "text-success",
  "fear": "text-primary",
  "joy": "text-info",
  "sadness": "text-muted"
};

var DocumentProfileEmotionWidgets = (props) => {

    var terms = props.entities.map((entity, idx) => {
      
      if(entity.emotions) {
        var maxVal = -Infinity, emotions = entity.emotions, category, obj;

        for (obj in emotions) {
          if(emotions[obj] > maxVal) {
            category = obj;
            maxVal = emotions[obj];
          }
        }

        return (
          <div className="col-sm-6 col-md-4" key={idx}>
              <div className="panel">
                  <div className={`h3 ${colors[category]}`}>{Math.round(maxVal * 10) / 10}</div>
                  <span className={`${colors[category]}`}>{entity.text} {category}</span>
              </div>
          </div>
        );

      }

      return ( 
        <div key={idx}> </div>
      ); 
    });

    return (

          <div className="col-md-4 centerText text-center">
              <h4 className="m-b-15 text-uppercase">Emotion Breakdown for Terms</h4>

             {terms}

          </div> 
    );
};

module.exports = DocumentProfileEmotionWidgets;                                        




                                        