var db = require("./connection.js");

var orm = {
	selectAll: function() {
		db.query(
			"SELECT * FROM burgers",
			function(err, data) {
				if (err) throw err;

				return data;
			}
		);
	},

	insertOne: function(newBurger) {
		db.query(
			"INSERT INTO burgers (burger_name) VALUES (?)",
			{
				burger_name: newBurger
			},
			function(err, data) {
				if (err) throw err;

				return data;
			}
		);
	},

	updateOne: function(burger) {
		db.query(
			"UPDATE burgers SET ? WHERE ?",
			{
				burger_name: burger.name,
				eaten: burger.eaten
			}, {
				id: burger.id
			},
			function(err, data) {
				if (err) throw err;

				return data;
			}
		);
	}
}

module.exports = orm;