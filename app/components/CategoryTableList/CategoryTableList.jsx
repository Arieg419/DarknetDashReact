import React from 'react';
import Aside from 'Aside';
import Navigation from 'Navigation';

// Import CSS
import "../../styles/assets/magnific-popup/magnific-popup.css";
import "../../styles/assets/jquery-datatables-editable/datatables.css";

// Import JS
import "../../styles/assets/jquery-datatables-editable/jquery.dataTables.js";
import "../../styles/assets/magnific-popup/magnific-popup.js";
import "../../styles/assets/jquery-datatables-editable/datatables.editable.init.js";

// Import CategoryTableItem
import CategoryTableItem from 'CategoryTableItem';

// Import Utils
import FetchData from 'FetchData';
import GetAvg from 'MetricCalculator';


var CategoryList = (props) => {
    var data;

    // Loading data based on current view
    switch(props.params.category) {
      case "Terror":
        data = FetchData.getTerror();
        break;
      case "Trafficking":
        data = FetchData.getTrafficking();
        break;
      case "Weapons":
        data = FetchData.getNarcotics();
        break;
      case "Narcotics":
        data = FetchData.getNarcotics();
        break;
    }

    return (
      <div>
        <section className="content">
          <div className="wraper container-fluid">
                  <div className="page-title"> 
                      <h3 className="title">Category Data Table</h3> 
                  </div>


                  <div className="panel">
                              
                      <div className="panel-body">
                          <table className="table table-bordered table-striped" id="datatable-editable">
                              <thead>
                                  <tr>
                                      <th>Document Name</th>
                                      <th>Discovery Date</th>
                                      <th>Overall Score</th>
                                      <th>URL</th>
                                  </tr>
                              </thead>
                                  <CategoryTableItem docs={data} category={props.params.category}/>
                          </table>
                      </div>


                  </div> 

              </div>
            </section>
      </div>
    );
};

module.exports = CategoryList;
