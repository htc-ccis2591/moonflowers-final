

(function () {

    var coffeeShopApp = {

        getWeeklySpecials: function () {
            var specialsData = "data/specials.json";
            return specialsData;
        },

        getMenuItems: function () {
            var menuData = "data/menu.json";
            return menuData;
        },

        displayWeeklySpecials: function (data) {

            var $target = $("#specials h2"),
                $pRemove = $("#specials").children().last();

            var specials = data.specials,
                count = specials.length;

            if (count > 0) {

                $pRemove.remove();

                $.each(specials, function (i, item) {

                    var description = item.description;

                    $("<p class='specialItem'>").text(description).insertAfter($target);

                });
            }
            return;
        },

        displayMenu: function (data) {

            var $targetBeverages = $("#espresso"),
                $targetBakery = $("#bakery"),
                $hBeveragesRemove = $("#espresso").prev(),
                $hBakeryRemove = $("#bakery").prev();

            var menu = data.menu,
                count = menu.length,
                beverage = 0,
                bakery = 0;

            if (count > 0) {

                $.each(menu, function (i, item) {

                    var imgSrc = item.img,
                        name = item.name,
                        price = item.price;

                    if (item.type === "beverage") {

                        beverage = beverage + 1;

                        $("<li>").append($("<span>", {
                            class: "menu-item",
                            text: (name + " " + price)
                        })).append($("<img>", {
                            class: "hide",
                            src: imgSrc
                        })).insertAfter($targetBeverages).appendTo($targetBeverages);

                    }

                    if (item.type === "bakery") {

                        bakery = bakery + 1;

                        $("<li>").append($("<span>", {
                            class: "menu-item",
                            text: (name + " " + price)
                        })).append($("<img>", {
                            class: "hide",
                            src: imgSrc
                        })).insertAfter($targetBakery).appendTo($targetBakery);

                    }

                    coffeeShopApp.showImg();

                });

            }
            if (beverage === 0) {
                $hBeveragesRemove.remove();
            }
            if (bakery === 0) {
                $hBakeryRemove.remove();
            }

        },

        showImg: function () {

            var $targetMenuItem = $(".menu-item");

            $($targetMenuItem).click(function () {

                imgSrc = $(this).next().attr("src");

                $("#aside-image").attr("src", imgSrc).removeAttr("class");

            })

        },

        buildMenu: function (data) {

            var $menu = $("#menu");

            $("<br><p><b>Click on menu item to see a picture of the item!</b></p>").insertAfter($menu.children().last());

            $("<h3>Beverages</h3>").insertAfter($menu.children().last());
            $('<ul id="espresso">').insertAfter($menu.children().last());

            $("<h3>Bakery</h3>").insertAfter($menu.children().last());
            $('<ul id="bakery">').insertAfter($menu.children().last());

            coffeeShopApp.menuItemsAjaxCall();
        },

        menuItemsAjaxCall: function () {

            $(document).ready(function () {

                $.getJSON(coffeeShopApp.getMenuItems(), function (data) {

                    coffeeShopApp.displayMenu(data);

                });

            });

        },

        weeklySpecialsAjaxCall: function () {

            $(document).ready(function () {

                $.getJSON(coffeeShopApp.getWeeklySpecials(), function (data) {

                    coffeeShopApp.displayWeeklySpecials(data);

                });

            });

        },

        formValidation: function () {

            $(document).ready(function () {

                var $newsletterEntryForm = $("#newsletterEntryForm"),
                    $nameEntry = $("#nameEntry"),
                    $emailEntry = $("#emailEntry");

                $newsletterEntryForm.submit(function () {

                var nameValidate = $nameEntry.val(),
                    emailValidate = $emailEntry.val();

                    if (nameValidate === "" || emailValidate === "") {

                        alert("All fields must have an entry!");
                            
                    } else if (nameValidate.length < 2) {

                        alert("Name must be at least 2 characters long!");
                            
                    } else if (!validateEmail(emailValidate)) {

                        alert("Please enter a valid email address!");
                            
                    }
                    
                    function validateEmail(emailValidate) {

                        var emailReg = new RegExp(/^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/),
                            valid = emailReg.test(emailValidate);

                        if (valid) {
                            return true;
                        } else {
                            return false;
                        }

                    }

                });


            });

        },


    }

    coffeeShopApp.buildMenu();
    
    coffeeShopApp.weeklySpecialsAjaxCall();
    
    coffeeShopApp.formValidation();

})();
