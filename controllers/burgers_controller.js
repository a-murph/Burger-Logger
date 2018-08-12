var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.select(function(data) {
		res.render("index", { burgers: data });
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