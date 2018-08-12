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
		db.query(
			"INSERT INTO burgers (burger_name) VALUES (?)",
			{
				burger_name: newBurger.name
			},
			function(err, data) {
				if (err) throw err;

				cb(data);
			}
		);
	},

	updateOne: function(burger, cb) {
		db.query(
			"UPDATE burgers SET ? WHERE ?",
			{
				eaten: burger.eaten
			}, {
				id: burger.id
			},
			function(err, data) {
				if (err) throw err;

				cb(data)
			}
		);
	}
}

module.exports = orm;