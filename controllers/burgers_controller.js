var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.select(function(data) {
		var eaten = [];
		var uneaten = [];

		//separate eaten burgers from uneaten
		for (var i = 0; i < data.length; i++) {
			if (data[i].eaten) {
				eaten.push(data[i]);
			} else {
				uneaten.push(data[i]);
			}
		}

		console.log({ eaten: eaten, uneaten: uneaten });
		

		res.render("index", { eaten: eaten, uneaten: uneaten });
	});
});

router.post("/", function(req, res) {
	burger.insert(req.body.burger, function(data) {
		res.json(data);
	});
});

router.put("/:id", function(req, res) {
	var updated = {
		name: req.body.burger,
		eaten: req.body.eaten,
		id: req.params.id
	}

	burger.update(updated, function(data) {
		res.json(data);
	});
});

module.exports = router;