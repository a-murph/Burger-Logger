$(document).ready(function() {
	$(".create-form").on("submit", function (event) {
		event.preventDefault();

		var burger = {
			burger_name: $("#burgerName").val().trim(),
		};

		$.ajax("/", {
			type: "POST",
			data: burger
		}).then(function (data) {
			console.log("created: " +data);
			location.reload();
		});
	});

	$(document).on("click", ".eat-button", function(event) {
		var burger = {
			eaten: 1,
			id: $(this).data("id")
		};

		$.ajax("/", {
			type: "PUT",
			data: burger
		}).then(function (data) {
			console.log("updated: " +data);
			location.reload();
		});
	});
});