// Util code to to convert colloquial date to JS Date object format.

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

var researchDays = [];

for(var i = 0; i < 20; i++) {
	researchDays.push(addDays(new Date(), Math.random()*-90));
}

module.exports = {
	researchDays
};

