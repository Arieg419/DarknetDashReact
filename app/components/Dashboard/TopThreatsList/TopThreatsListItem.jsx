var React = require('react');
var {Link, IndexLink} = require('react-router');

var TopThreatListItem = React.createClass({
	renderList: function() {
		return this.props.threats.map((threat) => {
				 return (
					<tr key={threat.key}>
			            <td>{threat.key}</td>
			            <td>{threat.documentName} </td>
			            <td>{threat.discoveryData}</td>
			            <td>{threat.darkClear}</td>
			            <td><span className={threat.classification}>{threat.overallScore}</span></td>
			            <td>{threat.URL}</td>
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