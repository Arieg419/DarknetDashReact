import React from 'react';
import Aside from 'Aside';
import Navigation from 'Navigation';

// Plugin CSS
import "../styles/assets/magnific-popup/magnific-popup.css";
import "../styles/assets/jquery-datatables-editable/datatables.css";

// JS imports
import "../styles/assets/magnific-popup/magnific-popup.js";
import "../styles/assets/jquery-datatables-editable/datatables.editable.init.js";

var CategoryList = React.createClass({

  render: function() {
    return (
      <div>
        <section className="content">
          <div className="wraper container-fluid">
                  <div className="page-title"> 
                      <h3 className="title">Editable Table</h3> 
                  </div>


                  <div className="panel">
                              
                      <div className="panel-body">
                          <div className="col-sm-6"><div id="datatable-editable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm" placeholder=""/></label></div></div>
                          <table className="table table-bordered table-striped" id="datatable-editable">
                              <thead>
                                  <tr>
                                      <th>Rendering engine</th>
                                      <th>Browser</th>
                                      <th>Platform(s)</th>
                                      <th>Actions</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr className="gradeX">
                                      <td>Trident</td>
                                      <td>Internet
                                          Explorer 4.0
                                      </td>
                                      <td>Win 95+</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeC">
                                      <td>Trident</td>
                                      <td>Internet
                                          Explorer 5.0
                                      </td>
                                      <td>Win 95+</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeA">
                                      <td>Trident</td>
                                      <td>Internet
                                          Explorer 5.5
                                      </td>
                                      <td>Win 95+</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeA">
                                      <td>Trident</td>
                                      <td>Internet
                                          Explorer 6
                                      </td>
                                      <td>Win 98+</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeA">
                                      <td>Trident</td>
                                      <td>Internet Explorer 7</td>
                                      <td>Win XP SP2+</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeA">
                                      <td>Trident</td>
                                      <td>AOL browser (AOL desktop)</td>
                                      <td>Win XP</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeA">
                                      <td>Gecko</td>
                                      <td>Firefox 1.0</td>
                                      <td>Win 98+ / OSX.2+</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  
                                  <tr className="gradeA">
                                      <td>Misc</td>
                                      <td>NetFront 3.4</td>
                                      <td>Embedded devices</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeX">
                                      <td>Misc</td>
                                      <td>Dillo 0.8</td>
                                      <td>Embedded devices</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeX">
                                      <td>Misc</td>
                                      <td>Links</td>
                                      <td>Text only</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeX">
                                      <td>Misc</td>
                                      <td>Lynx</td>
                                      <td>Text only</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeC">
                                      <td>Misc</td>
                                      <td>IE Mobile</td>
                                      <td>Windows Mobile 6</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeC">
                                      <td>Misc</td>
                                      <td>PSP browser</td>
                                      <td>PSP</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                                  <tr className="gradeU">
                                      <td>Other browsers</td>
                                      <td>All others</td>
                                      <td>-</td>
                                      <td className="actions">
                                          <a href="#" className="hidden on-editing save-row"><i className="fa fa-save"></i></a>
                                          <a href="#" className="hidden on-editing cancel-row"><i className="fa fa-times"></i></a>
                                          <a href="#" className="on-default edit-row"><i className="fa fa-pencil"></i></a>
                                          <a href="#" className="on-default remove-row"><i className="fa fa-trash-o"></i></a>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>


                  </div> 

              </div>
            </section>

            <div id="dialog" className="modal-block mfp-hide">
              <section className="panel panel-danger panel-color">
                  <div className="panel-heading">
                      <h2 className="panel-title">Are you sure?</h2>
                  </div>
                  <div className="panel-body">
                      <div className="modal-wrapper">
                          <div className="modal-text">
                              <p>Are you sure that you want to delete this row?</p>
                          </div>
                      </div>

                      <div className="row m-t-20">
                          <div className="col-md-12 text-right">
                              <button id="dialogConfirm" className="btn btn-primary">Confirm</button>
                              <button id="dialogCancel" className="btn btn-default">Cancel</button>
                          </div>
                      </div>
                  </div>
                  
              </section>
            </div>


      </div>
    );
  }
});

module.exports = CategoryList;
