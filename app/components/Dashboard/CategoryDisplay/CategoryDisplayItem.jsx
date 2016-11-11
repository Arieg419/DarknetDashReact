var React = require('react');
var {Link, IndexLink} = require('react-router');

var CategoryDisplayItem = React.createClass({
	renderList: function() {
		return this.props.categories.map((category) => {
				 return (
					<div className="col-lg-3 col-sm-6" key={category.key}>
	                    <div className="tile-stats white-bg"> 
	                        <div className="col-sm-8">
	                            <div className="status">
	                            <h3 className="m-t-15"><span className="counter">{category.traction}</span>%</h3> 
	                            <p>{category.name}</p>
	                        </div> 
	                        </div>
	                        <div className="col-sm-4 m-t-20">
	                        </div>
	                    </div> 
                    </div>
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

module.exports = CategoryDisplayItem;
