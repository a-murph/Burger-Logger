var orm = require("../config/orm.js");

var burger = {
	select: function(cb) {
		orm.selectAll(function(data) {
			cb(data);
		});
	},

	insert: function(burger, cb) {
		orm.insertOne(burger, function(data) {
			cb(data);
		});
	},

	update: function(burger, cb) {
		orm.updateOne(burger, function(data) {
			cb(data);
		});
	}
};

module.exports = burger;