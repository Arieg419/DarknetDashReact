import docRanker from 'DocRank';

function metricCalculator(docs) {
	var total = 0, sentimentScore = 0;

	if(docs.length > 0) {
		docs.forEach((doc) => {
				total += docRanker(doc, doc.overAllScore);
				console.log(total);
		});
		// return (sentimentScore * 1.0 / entityCtr);
		console.log("total is ");
		console.log(total);
		console.log(docs.length);
		return total * 1.0 / docs.length;
	} else {
		return defaultScore;
	}
}

module.exports = metricCalculator;