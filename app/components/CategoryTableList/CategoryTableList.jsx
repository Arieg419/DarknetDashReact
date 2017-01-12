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
import allData from 'json-loader!NarcoticsData/arrest_cocaine';
import arrest_cocaine from 'json-loader!NarcoticsData/arrest_cocaine';
import Auusi_app from 'json-loader!NarcoticsData/Auusi_app';
import Bilibid_drug_probe from 'json-loader!NarcoticsData/Bilibid_drug_probe';
import co_market_diabetes_drug from 'json-loader!NarcoticsData/co_market_diabetes_drug';
import cocaine from 'json-loader!NarcoticsData/cocaine';
import country_servant from 'json-loader!NarcoticsData/country_servant';
import De_Lima_drugs from 'json-loader!NarcoticsData/De_Lima_drugs';
import drug_abuse from 'json-loader!NarcoticsData/drug_abuse';
import drug_overdise from 'json-loader!NarcoticsData/drug_overdise';
import drug_pusherers_killed from 'json-loader!NarcoticsData/drug_pusherers_killed';
import fentanyl_pills_drug from 'json-loader!NarcoticsData/fentanyl_pills_drug';
import golden_age_drug_trade from 'json-loader!NarcoticsData/golden_age_drug_trade';
import illigal_imigrant_drugs from 'json-loader!NarcoticsData/illigal_imigrant_drugs';
import laundering_money_drug_dealers from 'json-loader!NarcoticsData/laundering_money_drug_dealers';
import mexican_drugs from 'json-loader!NarcoticsData/mexican_drugs';
import mexican_mule_bound_drugs from 'json-loader!NarcoticsData/mexican_mule_bound_drugs';
import ontario_drug_bust from 'json-loader!NarcoticsData/ontario_drug_bust';
import regina_man_drugs from 'json-loader!NarcoticsData/regina_man_drugs';
import spurious_ghee_drugs from 'json-loader!NarcoticsData/spurious_ghee_drugs';
import Data from '../testData.json';

// Import Narcotics Data
var narcData = [arrest_cocaine, Auusi_app, Bilibid_drug_probe, co_market_diabetes_drug, cocaine, country_servant, De_Lima_drugs, drug_abuse, drug_overdise, drug_pusherers_killed, fentanyl_pills_drug, golden_age_drug_trade, illigal_imigrant_drugs, laundering_money_drug_dealers, mexican_drugs, mexican_mule_bound_drugs, ontario_drug_bust, regina_man_drugs, spurious_ghee_drugs];
console.log(narcData);
// narcData.forEach(function(doc) {
//   console.log("import " + doc + " from " + "json-loader!NarcoticsData/" + doc);
// });
// from os import listdir
// from os.path import isfile, join
// onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]




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
                                  <CategoryTableItem docs={Data.CategoryTableList} />
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
