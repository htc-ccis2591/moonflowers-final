(function ($) {

	var moonflowerApp = {
			buildMenu: function (data) {
				$.getJSON('data/menu.json', function (data) {
					var menuBook = data.menu,
						count = menuBook.length;
					var $menu = $("#menu");
					$("<h3>Beverages</h3>").insertAfter($menu.children()
											.last());
					$('<ul id="espresso">').insertAfter($menu.children()
											.last());

					$("<h3>Bakery</h3>").insertAfter($menu.children().last());
					$('<ul id="bakery">').insertAfter($menu.children().last());

					if (count > 0) {
						$.each(menuBook, function (i, obj) {

							if (obj.type === 'beverage') {

								$('#espresso').append('<li>' + '<span>' + obj.name + '  ' + obj.price + '</span>' + '</li>');
								$('span').attr("class", "menu-item");
								var img = $('<img />', {
									id: obj.name,
									src: obj.img
								});
								img.appendTo($('#espresso').children().last());
							} // end if

							if (obj.type === 'bakery') {

								$('#bakery').append('<li>' + '<span>' + obj.name + '  ' + obj.price + '</span>' + '</li>');
								$('span').attr("class", "menu-item");
								var img = $('<img />', {
									id: obj.name,
									src: obj.img
								});
								img.appendTo($('#bakery').children().last());
							}

						});

					}

				});


			},

			weeklySpecials: function (data) {
				$("#specials p").remove();

				$.getJSON('data/specials.json', function (data) {
					var specialsBook = data.specials,
						count = specialsBook.length;

					if (count > 0) {
						$.each(specialsBook, function (i, obj) {


							$('#specials').append('<p>' + obj.description + '<p>');


						});

					}

				});


			}

		};

	moonflowerApp.buildMenu();

	moonflowerApp.weeklySpecials();

	$("#register").submit(function () {
		var fullname = $("#fullname").val();
		var text = $("#email").val();

		if (text === "" & fullname === "") {
			$("#register").before("<p>Please fill out the form to submit information.</p>");
			return false;
		} else {
			$("#fullname").empty();
			$("#email").empty();
			return true;
		}

	}}
	);