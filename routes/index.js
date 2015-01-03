
/*
 * GET home page.
 */

var newletterContent = require('../data');

var newsletter = require('../newsletter');

for(var number in newletterContent) {
	newletterContent[number] = newsletter(newletterContent[number]);
}

exports.newsletter = function(req, res){
	var number = req.param('number');

	if (typeof newletterContent[number] === 'undefined') {
		res.status(404).json({status: 'No information for specified input parameter'});
	} else {
		res.json(newletterContent[number].getStoryHighlights());
	}
};

exports.current = function (req, res) {
	// Update with current quarter
	var number = "Q1";

	res.render('newsletter', {
		title: 'All Newsletter Content', 
		newletterContent: newletterContent,
		quarter: number
	});
};