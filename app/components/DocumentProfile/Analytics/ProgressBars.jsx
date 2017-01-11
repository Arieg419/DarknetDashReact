import React from 'react';
var divStyle = {
  width: '80%'
};


const barColors = ["progress-bar-purple", "progress-bar-warning", "progress-bar-success", "progress-bar-info", "progress-bar-pink"];
const barColorsLen = barColors.length;
const textColors= ["text-purple","text-warning", "text-success", "text-info"];
const textColorsLen = textColors.length;

const createIdx = (idx, len) => {
  return idx % len;
};

var DocumentProfileProgressBar = (props) => {

    var terms = props.entities.map((entity, idx) => {
      var checker = `${Math.floor(entity.relevance*100)}`;
      return (
        <div key={idx}>
          <p className="small">{entity.text} - {entity.type} - <span className={textColors[createIdx(idx, textColorsLen)]}>{entity.relevance*100}</span></p>
          <div className="progress">
            <div className={`progress-bar progress-animated animated ${barColors[createIdx(idx, barColorsLen)]}`} role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: `${Math.floor(entity.relevance*100)}%`}}>
            </div>
          </div>
        </div>
        );
    });

    return (
           <div className="col-md-3">
              <h4 className="m-b-15 text-uppercase">Term Relevance</h4>

             {terms}

            </div> 
    );
};

module.exports = DocumentProfileProgressBar;                                        




                                        