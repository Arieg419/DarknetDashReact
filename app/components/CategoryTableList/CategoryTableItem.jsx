var React = require('react');
var {Link, IndexLink} = require('react-router');

var CategoryTableItem = React.createClass({
	renderList: function() {
		return this.props.docs[0].Paedophilia.map((doc) => {
				 return (
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
				);
		});
	},
	render: function() {
		return (
			<div>
				{this.renderList()}
			</div>
		);
	}
});

module.exports = CategoryTableItem;