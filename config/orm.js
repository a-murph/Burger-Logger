var db = require("./connection.js");

var orm = {
	selectAll: function(cb) {
		db.query(
			"SELECT * FROM burgers",
			function(err, data) {
				if (err) throw err;

				cb(data);
			}
		);
	},

	insertOne: function(newBurger, cb) {
		var q = db.query(
			"INSERT INTO burgers (burger_name) VALUES (?)",
			[
				newBurger
			],
			function(err, data) {
				if (err) throw err;

				cb(data);
			}
		);

		console.log(q.sql);
	},

	updateOne: function(burger, cb) {
		db.query(
			"UPDATE burgers SET ? WHERE ?",
			[
				{
					eaten: burger.eaten
				}, {
					id: burger.id
				}
			],
			function(err, data) {
				if (err) throw err;

				cb(data)
			}
		);
	}
}

module.exports = orm;