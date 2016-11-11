var React = require('react');

import CategoryDisplayItem from 'CategoryDisplayItem';

var CategoryDisplayList = (props) => {
	return (
		<div className="row">
	        <CategoryDisplayItem categories={props.categories} />
        </div>
	);
};

module.exports = CategoryDisplayList;