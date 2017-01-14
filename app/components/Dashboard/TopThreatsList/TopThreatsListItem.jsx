var React = require('react');
var {Link, IndexLink} = require('react-router');

var TopThreatListItem = React.createClass({
	renderList: function() {
		return this.props.threats.map((threat) => {
				 return (
					<tr key={threat.key}>
			            <td>{threat.key}</td>
			            <td>{threat.title} </td>
			            <td>{threat.dateFound}</td>
			            <td>{ threat.fromDark ? "Darknet" : "Clearnet" }</td>
			            <td><span className="label label-warning">{threat.overAllScore}</span></td>
			            <td>{threat.url}</td>
		        	</tr>
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

module.exports = TopThreatListItem;