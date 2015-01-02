var Newsletter = function () {
	this.data = {
		news_snapshot_title1: null,
		news_snapshot_summary1: null,
		news_snapshot_title2: null,
		news_snapshot_summary2: null,
		news_snapshot_title3: null,
		news_snapshot_summary3: null
	};

	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};
	
	this.getInformation = function () {
		return this.data;
	};
};

module.exports = function (info) {
	var instance = new Newsletter();

	instance.fill(info);

	return instance;
};