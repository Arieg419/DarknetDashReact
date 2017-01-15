const severeThreats = [];

var personalIsisData = require('json-loader!TerrorData/personalIsisData');
severeThreats.push(personalIsisData);

var besa_mafia = require('json-loader!TerrorData/besa_mafia');
severeThreats.push(besa_mafia);

var bitpharma = require('json-loader!NarcoticsData/bitpharma'); 
severeThreats.push(bitpharma);

var cannabisUK = require('json-loader!NarcoticsData/cannabisUK'); 
severeThreats.push(cannabisUK);

var peopleDrugStore = require('json-loader!NarcoticsData/peopleDrugStore'); 
severeThreats.push(peopleDrugStore);



function getHighestRanked() {
	return severeThreats;
}

module.exports = getHighestRanked;