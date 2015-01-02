
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
		res.status(404).json({status: 'error'});
	} else {
		res.json(newletterContent[number].getInformation());
	}
};

exports.current = function (req, res) {
	res.render('newsletter', {
		title: 'All Newsletter Content', 
		newletterContent: newletterContent});
};