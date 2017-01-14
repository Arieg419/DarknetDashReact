function calcEmotion(docs) {
	var entityCtr = 0, angerScore = 0.0, disgustScore = 0.0, fearScore = 0.0, joyScore = 0.0, sadnessScore = 0.0, total = 0;
	var res = [];

	if(docs.length > 0) {
		docs.forEach((doc) => {
			if(doc.entities.length) {
				doc.entities.forEach((entity) => {
					if(entity.hasOwnProperty('emotions')) {
						entityCtr++;
						if(entity.emotions.hasOwnProperty('anger'))
							angerScore += parseFloat(entity.emotions.anger);
						if(entity.emotions.hasOwnProperty('disgust'))
							console.log(entity.emotions.disgust);
							disgustScore += parseFloat(entity.emotions.disgust);
						if(entity.emotions.hasOwnProperty('fear'))
							fearScore += parseFloat(entity.emotions.fear);	
						if(entity.emotions.hasOwnProperty('joy'))
							joyScore += parseFloat(entity.emotions.joy);
						if(entity.emotions.hasOwnProperty('sadness'))
							sadnessScore += parseFloat(entity.emotions.sadness);
					}
				})
			}
		});
		console.log("final scores...");
		angerScore = parseFloat(angerScore).toFixed(2);
		disgustScore = parseFloat(disgustScore).toFixed(2);
		fearScore = parseFloat(fearScore).toFixed(2);
		joyScore = parseFloat(joyScore).toFixed(2);
		sadnessScore = parseFloat(sadnessScore).toFixed(2);
		total += Math.ceil(angerScore) + Math.ceil(disgustScore) + Math.ceil(fearScore) + Math.ceil(sadnessScore) + Math.ceil(joyScore);
		res.push(angerScore / total);
		res.push(disgustScore / total);
		res.push(fearScore / total);
		res.push(joyScore / total);
		res.push(sadnessScore / total);
		return res;
	} else {
		throw new Error("No entities available...");
	}
}

module.exports = calcEmotion;