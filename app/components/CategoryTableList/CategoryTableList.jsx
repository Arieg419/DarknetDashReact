import React from 'react';
import Aside from 'Aside';
import Navigation from 'Navigation';

// Plugin CSS
import "../../styles/assets/magnific-popup/magnific-popup.css";
import "../../styles/assets/jquery-datatables-editable/datatables.css";

// JS imports
import "../../styles/assets/jquery-datatables-editable/jquery.dataTables.js";
import "../../styles/assets/magnific-popup/magnific-popup.js";
import "../../styles/assets/jquery-datatables-editable/datatables.editable.init.js";

// Import CategoryTableItem
import CategoryTableItem from 'CategoryTableItem';

// Import Data
import Data from '../testData.json';

var CategoryList = React.createClass({

  render: function() {
    return (
      <div>
        <section className="content">
          <div className="wraper container-fluid">
                  <div className="page-title"> 
                      <h3 className="title">Category Data Table</h3> 
                  </div>


                  <div className="panel">
                              
                      <div className="panel-body">
                          <div className="col-sm-6"><div id="datatable-editable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm" placeholder=""/></label></div></div>
                          <table className="table table-bordered table-striped" id="datatable-editable">
                              <thead>
                                  <tr>
                                      <th>Document Name</th>
                                      <th>Document Source</th>
                                      <th>Overall Score</th>
                                      <th>URL</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <CategoryTableItem docs={Data.CategoryTableList} />
                              </tbody>
                          </table>
                      </div>


                  </div> 

              </div>
            </section>
      </div>
    );
  }
});

module.exports = CategoryList;
