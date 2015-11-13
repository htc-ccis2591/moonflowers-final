(function () {

    var coffeeShopApp = {

        buildMenu: function (data) {

            var $menu = $("#menu");

            $("<p><b>Click on menu item to see a picture of the item!</b></p>").insertAfter($menu.children().last());

            $("<h3>Beverages</h3>").insertAfter($menu.children().last());
            $('<ul id="espresso">').insertAfter($menu.children().last());

            $("<h3>Bakery</h3>").insertAfter($menu.children().last());
            $('<ul id="bakery">').insertAfter($menu.children().last());

            coffeeShopApp.menuItemsAjaxCall();
        },



        displayWeeklySpecials: function (data) {

            var $weeklySpecial = $("#specials").css({
                    "color": "red"
                }),
                $target = $("#specials h2").children().first();

            var specials = data.specials,
                count = specials.length;

            if (count > 0) {

                $.each(specials, function (i, obj) {

                    var description = obj.description;

                    $("<p class='specialItem'>").text(description).insertAfter($weeklySpecial).css({
                        "color": "red"
                    });
                    //$("p[.specialItem]").insertAfter($target);

                });
            }
            return;
        },

        displayMenu: function (data) {

            var $beverageMenu = $("#espresso"),
                $bakeryMenu = $("#bakery"),
                $beverageRemove = $("#espresso").prev(),
                $bakeryRemove = $("#bakery").prev();

            var menu = data.menu,
                count = menu.length;


            if (count > 0) {

                $.each(menu, function (i, obj) {

                    var imgSrc = obj.img,
                        name = obj.name,
                        price = obj.price,
                        bakery = 0;

                    if ('beverage' === obj.type) {

                        $("<li>").append($("<span>", {
                            class: "menu-item",
                            text: (name + " " + price)
                        })).append($("<img>", {
                            class: "hide",
                            src: imgSrc
                        })).insertAfter($beverageMenu).appendTo($beverageMenu);

                    }

                    if ('bakery' === obj.type) {

                        $("<li>").append($("<span>", {
                            class: "menu-item",
                            text: (name + " " + price)
                        })).append($("<img>", {
                            class: "hide",
                            src: imgSrc
                        })).insertAfter($bakeryMenu).appendTo($bakeryMenu);

                    }

                    coffeeShopApp.showImage();

                });

            }

        },

        showImage: function () {

            var $MenuItem = $(".menu-item");

            $($MenuItem).click(function () {

                imgSrc = $(this).next().attr("src");
                $(this).css({
                    "color": "red"
                })

                $("#aside-image").attr("src", imgSrc).removeAttr("class");

            })

        },


        menuItemsAjaxCall: function () {

            $(document).ready(function () {

                $.getJSON("data/menu.json", function (data) {

                    coffeeShopApp.displayMenu(data);

                });

            });

        },

        weeklySpecialsAjaxCall: function () {

            $(document).ready(function () {

                $.getJSON("data/specials.json", function (data) {

                    coffeeShopApp.displayWeeklySpecials(data);

                });

            });

        },

        validSignUp: function () {
            $(document).ready(function () {

                $("#signUp").submit(function () {
                    var fullName = $("#fullName").val();
                    var email = $("#email").val();

                    if (fullName === "" & email === "") {
                        $("#signUp").before("<p>Sign up here!</p>");
                        return false;
                    } else {
                        $("#fullName").empty();
                        $("#email").empty();
                        return true;
                    }

                });

            });
        }
    }
    coffeeShopApp.buildMenu();
    coffeeShopApp.weeklySpecialsAjaxCall();
    coffeeShopApp.validSignUp();

})();
