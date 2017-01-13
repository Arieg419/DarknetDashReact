var React = require('react');
var {Link, IndexLink} = require('react-router');
var docRank = require('DocRank');

var CategoryTableItem = React.createClass({
	renderList: function() {
		console.log("In table item");
		console.log(this.props.docs);
		return this.props.docs.map((doc, idx) => {
				 var linkPath = `documentprofile/${this.props.category}/${doc.title}`;
				 var scoring = docRank(doc, doc.overAllScore);

				 return (
				 	<Link to={linkPath} key={idx}>
						<tr className="gradeX" className="linkable">
	                      <td>{doc.title}</td>
	                      <td>{doc.dateFound}</td>
	                      <td>{scoring}</td>
	                      <td className="actions">{doc.url.slice(0,20)}</td>
	                    </tr>
                    </Link>
				);
		});
	},
	render: function() {
		return (
			<tbody>
				{this.renderList()}
			</tbody>
		);
	}
});

module.exports = CategoryTableItem;