function rankDoc(doc, defaultScore) {
	var entityCtr = 0, sentimentScore = 0;

	if(doc.entities.length > 0) {
		doc.entities.forEach((entity) => {
			if(entity.sentiment.type != "neutral") {
				entityCtr++;
				sentimentScore += (entity.sentiment.score) * 10;
			}
		});
		return (sentimentScore * 1.0 / entityCtr);
	} else {
		return defaultScore;
	}
}

module.exports = rankDoc;