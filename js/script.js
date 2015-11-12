(function () {

    $(document).ready(function () {

        var coffeeShopApp = {
                buildMenu: function (data) {
                    var $menu = $("#menu");




                    $.getJSON('data/menu.json', function (data) {
                            var menuItems = data.menu,
                                count = menuItems.length;
                        $("<p>Click an item for image.</p>").insertAfter($menu);
                            $("<h3>Beverages</h3>").insertAfter($menu.children().last());
                            $('<ul id="espresso">').insertAfter($menu.children().last());
                            if (count > 0) {
                                $.each(menuItems, function (i, obj) {
                                    if (obj.type === 'beverage') {
                                        $('#espresso').append('<li>' + '<span>' + obj.name + '' + obj.price + '</span>' + '</li>');
                                        $('span').attr("class", ".menu-item");
                                        var img = $('<img>', {
                                            id: obj.name,
                                            src: obj.img
                                        });

                                        img.appendTo($('#espresso').children().last());
                                    }
                                })

                            }

                            $.getJSON('data/menu.json', function (data) {
                                var menuItems = data.menu,
                                    count = menuItems.length;
                                $("<h3>Bakery</h3>").insertAfter($menu.children().last());
                                $('<ul id="bakery">').insertAfter($menu.children().last());
                                if (count > 0) {
                                    $.each(menuItems, function (i, obj) {
                                        if (obj.type === 'bakery') {
                                            $('#bakery').append('<li>' + '<span>' + obj.name + '' + obj.price + '</span>' + '</li>');
                                            $('span').attr("class", ".menu-item");
                                            var img = $('<img>', {
                                                id: obj.name,
                                                src: obj.img

                                            });

                                            img.appendTo($('#bakery').children().last());
                                        }
                                    })

                                }
                                // Add code to get the menu data using Ajax
                                // & add the menu items to the appropriate section
                                // An example:
                                // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>

                                $("#specials p").remove();

                                $.getJSON('data/specials.json', function (data) {
                                    var weeklySpecials = data.specials,
                                        count = weeklySpecials.length;
                                    if (count > 0) {
                                        $.each(weeklySpecials, function (i, obj) {
                                            $('#specials').append('<p>' + obj.description + '</p>');
                                        });
                                    }
                                });


                            });
                        }



                    )
                }
            }
            // Add a new method to add the weekly specials

        // Add a method to validate the registration form
        // There should be both a name and a valid email


        // Uncomment the line below to build the menu
        coffeeShopApp.buildMenu();
        // Call the methods to add the weekly specials

        // Add code for the form submit button it should validate the form
var formValidate
    });

}())