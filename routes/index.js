
/*
 * GET home page.
 */

var newsletterContent = require('../data');
var newsletter = require('../newsletter');

for(var number in newsletterContent) {
	newsletterContent[number] = newsletter(newsletterContent[number]);
}

exports.newsletter = function(req, res){
	var number = req.param('number');

	if (typeof newsletterContent[number] === 'undefined') {
		res.status(404).json({status: 'No information for specified input parameter'});
	} else {
		res.json(newsletterContent[number].getStoryHighlights());
	}
};

exports.current = function (req, res) {
	res.render('newsletter', {
		title: 'Sample Newsletter', 
		newsletterContent: newsletterContent
	});
};