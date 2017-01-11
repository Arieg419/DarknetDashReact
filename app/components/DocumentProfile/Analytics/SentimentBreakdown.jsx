import React from 'react';


var SentimentBreakdown = (props) => {
    return (    
              <div className="col-md-6 .col-md-offset-2">
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
                                                    <th>#</th>
                                                    <th>Column heading</th>
                                                    <th>Column heading</th>
                                                    <th>Column heading</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="active">
                                                    <td>1</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr className="success">
                                                    <td>3</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr className="danger">
                                                    <td>9</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
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