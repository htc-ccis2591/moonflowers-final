(function () {

    var coffeeShopApp = {
        buildMenu: function (data) {

            var $menu = $("#menu");
            $("<h3>Beverages</h3>").insertAfter($menu.children().last());
            $('<ul id="espresso">').insertAfter($menu.children().last());

            $("<h3>Bakery</h3>").insertAfter($menu.children().last());
            $('<ul id="bakery">').insertAfter($menu.children().last());

            // Add code to get the menu data using Ajax
            // & add the menu items to the appropriate section
            // An example:
            // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>
        }
    };
    var MenuItems = {
        BuildItems: function (data) {
            $.ajax({
                type: 'get',
                url: 'data/menu.json',
                success: function (data2) {
                    var menus = data2.menu,
                        count = menus.length;
                    if (count > 0) {
                        $.each(menus, function (i, obj) {

                            if (obj.type === 'beverage') {
                                var li = $("<li>");
                                $("#espresso").append(li);
                                li.append("<span class=menu-item>" + obj.name + " " + obj.price);
                                if (obj.img !== undefined) {
                                    li.append("<img src=" + obj.img + ">");
                                }
                            }
                            if (obj.type === 'bakery') {
                                var li2 = $("<li>");

                                $("#bakery").append(li2)
                                li2.append("<span class=menu-item>" + obj.name + " " + obj.price);
                                if (obj.img !== undefined) {
                                    li2.append("<img src=" + obj.img + ">");
                                    $("img").attr("class", "hide");
                                    $(".menu-item").click(function () {
                                        var pic = $(this).next().attr("src");
                                        console.log($(this).next())
                                        $("#aside-image").attr("src", pic).removeAttr("class");
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }
    }









    // Add a new method to add the weekly specials
    var SpecialItems = {
        AllSpecial: function (data) {
            $.ajax({
                type: 'GET',
                url: 'data/specials.json',
                dataType: 'json',
                success: function (data) {
                    var special = data.specials,
                        count = special.length;
                    if (count > 0) {
                        $.each(special, function (i, obj) {
                            // $("#specials").append("<p>" + obj.key);
                            $("#specials").append("<p>" + obj.description);
                        });
                    };
                }

            });
        }
    }

    // Add a method to validate the registration form
    // There should be both a name and a valid email



    // Uncomment the line below to build the menu
    coffeeShopApp.buildMenu();
    MenuItems.BuildItems();

    // Call the methods to add the weekly specials
    SpecialItems.AllSpecial();

    // Add code for the form submit button it should validate the form

    $("#register").submit(function () {
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

        var text = $("#email").val();
        console.log(text);

        if (text === "") {
            alert("Email can't be blank!");
        }
        if (!filter.test(text)) {
            alert("not good");
        }

        var name = $("#name").val();
        console.log(name);

        if (name === "") {
            alert("You must have a name")
        }
        //event.preventDefault();
        return false;
    });

}())