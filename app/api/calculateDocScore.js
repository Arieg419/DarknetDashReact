function rankDoc(doc, defaultScore) {
	var entityCtr = 0, sentimentScore = 0;

	if(doc.entities.length > 0) {
		console.log('doc.entities.length is larger than zero');
		doc.entities.forEach((entity) => {
			if(entity.sentiment.type != "neutral") {
				entityCtr++;
				console.log("entity sentiment score is ");
				sentimentScore += (entity.sentiment.score) * 10;
				console.log(sentimentScore);
			}
		});
		return (sentimentScore * 1.0 / entityCtr);
	} else {
		return defaultScore;
	}
}

module.exports = rankDoc;