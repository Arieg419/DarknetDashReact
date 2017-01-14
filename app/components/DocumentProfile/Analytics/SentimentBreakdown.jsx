import React from 'react';

const sentimentClasses = ["active", "success", "danger"];
var SentimentBreakdown = (props) => {

    const terms = props.entities.map((entity, idx) => {
        var light = '';
        if(!entity.hasOwnProperty("sentiment")) return (<tr key={idx}></tr>);
        if(entity.sentiment.type === "negative") light = "danger";
        if(entity.sentiment.type === "positive") light = "success";
        if(entity.sentiment.type === "neutral") light = "active";
        return (
            <tr className={`${light}`} key={idx}>
                <td>{idx}</td>
                <td>{entity.text}</td>
                <td>{entity.type}</td>
                <td>{Math.floor(entity.sentiment.score * 100)}</td>
            </tr>
        );
    });

    return (    
              <div className="col-md-5 ">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Sentiment Breakdown</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Relavence</th>
                                                    <th>Term</th>
                                                    <th>Classification</th>
                                                    <th>Sentiment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {terms}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

module.exports = SentimentBreakdown;
