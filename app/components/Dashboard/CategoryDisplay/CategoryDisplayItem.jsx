var React = require('react');
var {Link, IndexLink} = require('react-router');

const widgetColors = ['bg-light-pink', 'bg-light-purple', 'bg-light-blue', 'bg-light-green'];

var CategoryDisplayItem = React.createClass({
	renderList: function() {
		return this.props.categories.map((category,idx) => {
				 return (
					<div className="col-lg-3 col-sm-6" key={category.key}>
	                    <div className={`tile-stats ${widgetColors[idx]}`}> 
	                        <div className="col-sm-8">
	                            <div className="status" style={{color: '#fff'}}>
	                            	<h3 className="m-t-15"><span>{category.traction}</span>%</h3> 
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
