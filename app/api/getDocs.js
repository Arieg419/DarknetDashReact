function grabTerrorismData() {
  var terror_atacks_in_8days = require('json-loader!TerrorData/terror_atacks_in_8days'); 
  var armed_police_in_uk = require('json-loader!TerrorData/armed_police_in_uk');
  var arrest_of_teens_in_nice_on_suspition_of_terror = require('json-loader!TerrorData/arrest_of_teens_in_nice_on_suspition_of_terror'); 
  var bringing_gun_to_school_florida = require('json-loader!TerrorData/bringing_gun_to_school_florida');
  var isis_destroyes_church_in_iraq = require('json-loader!TerrorData/isis_destroyes_church_in_iraq');
  var sarona_market_terror_attack = require('json-loader!TerrorData/sarona_market_terror_attack');
  var terror_in_new_york = require('json-loader!TerrorData/terror_in_new_york');
  var terrorists_pretend_being_refugees = require('json-loader!TerrorData/terrorists_pretend_being_refugees');
  var worldwide_condemnation_for_jerusalem_terror_attack = require('json-loader!TerrorData/worldwide_condemnation_for_jerusalem_terror_attack');
  var besa_mafia = require('json-loader!TerrorData/besa_mafia');
  var personalIsisData = require('json-loader!TerrorData/personalIsisData');
  return [personalIsisData, besa_mafia, terror_atacks_in_8days, armed_police_in_uk, arrest_of_teens_in_nice_on_suspition_of_terror, bringing_gun_to_school_florida, isis_destroyes_church_in_iraq, sarona_market_terror_attack, terror_in_new_york, terrorists_pretend_being_refugees, worldwide_condemnation_for_jerusalem_terror_attack];
}

function grabNarcdata() {
  var arrest_cocaine = require('json-loader!NarcoticsData/arrest_cocaine'); 
  var Auusi_app = require('json-loader!NarcoticsData/Auusi_app'); 
  var Bilibid_drug_probe = require('json-loader!NarcoticsData/Bilibid_drug_probe'); 
  var co_market_diabetes_drug = require('json-loader!NarcoticsData/co_market_diabetes_drug'); 
  var cocaine = require('json-loader!NarcoticsData/cocaine'); 
  var country_servant = require('json-loader!NarcoticsData/country_servant'); 
  var De_Lima_drugs = require('json-loader!NarcoticsData/De_Lima_drugs'); 
  var drug_abuse = require('json-loader!NarcoticsData/drug_abuse'); 
  var drug_overdise = require('json-loader!NarcoticsData/drug_overdise'); 
  var drug_pusherers_killed = require('json-loader!NarcoticsData/drug_pusherers_killed'); 
  var fentanyl_pills_drug = require('json-loader!NarcoticsData/fentanyl_pills_drug'); 
  var golden_age_drug_trade = require('json-loader!NarcoticsData/golden_age_drug_trade');
  var golden_age_drug_trade = require('json-loader!NarcoticsData/golden_age_drug_trade'); 
  var Dump_Street = require('json-loader!NarcoticsData/Dump_Street'); 
  var bitpharma = require('json-loader!NarcoticsData/bitpharma'); 
  var cannabisUK = require('json-loader!NarcoticsData/cannabisUK'); 
  var peopleDrugStore = require('json-loader!NarcoticsData/peopleDrugStore'); 
  return [peopleDrugStore, cannabisUK, bitpharma, Dump_Street, arrest_cocaine, Auusi_app, Bilibid_drug_probe, co_market_diabetes_drug, cocaine, country_servant, De_Lima_drugs, drug_abuse, drug_overdise, drug_pusherers_killed, fentanyl_pills_drug, golden_age_drug_trade];
}

function grabTraffickingdata() {
  var deth_human_tra_teen = require('json-loader!TraffickingData/deth_human_tra_teen');
  var enslave_nanny_case = require('json-loader!TraffickingData/enslave_nanny_case');
  var fbI_human_trafficking_sweep = require('json-loader!TraffickingData/fbI_human_trafficking_sweep');
  var girlfriend_forced_sex_trade = require('json-loader!TraffickingData/girlfriend_forced_sex_trade');
  var human_trafficking_prince_George = require('json-loader!TraffickingData/human_trafficking_prince_George');
  var national_human_trafficking_sting = require('json-loader!TraffickingData/national_human_trafficking_sting');
  var offering_12_years_old = require('json-loader!TraffickingData/offering_12_years_old');
  var Prosecutors_sex_trafficking = require('json-loader!TraffickingData/Prosecutors_sex_trafficking');
  var selling_baby_on_ebay = require('json-loader!TraffickingData/selling_baby_on_ebay');
  var sex_trafficking = require('json-loader!TraffickingData/sex_trafficking');
  var teen_trafficking = require('json-loader!TraffickingData/teen_trafficking');
  var website_pimping_kids = require('json-loader!TraffickingData/website_pimping_kids');
  return [deth_human_tra_teen, enslave_nanny_case, fbI_human_trafficking_sweep, girlfriend_forced_sex_trade, human_trafficking_prince_George, national_human_trafficking_sting, offering_12_years_old, Prosecutors_sex_trafficking, selling_baby_on_ebay, sex_trafficking, teen_trafficking, website_pimping_kids];
}

module.exports = {
  getTerror: grabTerrorismData,
  getTrafficking: grabTraffickingdata,
  getNarcotics: grabNarcdata
};