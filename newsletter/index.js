var Newsletter = function () {
	this.data = {
		title: null,
		subtitle: null,
		summary: null,
		description: null,
		link: null,
		sidebartitle: null,
		sidebardescription: null
	};

	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};

	this.getStoryHighlights = function () {
		return this.data;
	};
	this.getStoryDetails = function () {
		return this.fullData;
	};
};

module.exports = function (info) {
	var instance = new Newsletter();

	instance.fill(info);

	return instance;
};