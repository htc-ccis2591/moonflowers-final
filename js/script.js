(function () {

    //$(document).ready(function() {
    //var $headings = $("h2");

    var coffeeShopApp = {
        buildMenu: function (data) {

    //page 231 Listing 10.3.2

    // Add code to get the menu data using Ajax
    // & add the menu items to the appropriate section

            $.getJSON('data/menu.json', function (data) {
                var menuItem = data.menu,
                count = menuItem.length;
                $('#espresso').empty();
                
        //showImg: function () {
        var $menu = $("#menu");
        //var $espresso = $("#espresso");
        $("<p>Click a menu item to view a picture.</p>").insertAfter($menu.children().last());
        var $menuItem = $(".menu-item");
        $menuItem.next().attr("class", "hide");
                
        $menuItem.click(function () {
        imgSrc = $(this).next().attr("src");
        $("#aside-image").attr("src", imgSrc).removeAttr("class");
            });
  //};


                $("<h3>Beverages</h3>").insertAfter($menu.children().last());
                $('<ul id="espresso">').insertAfter($menu.children().last());

                $("<h3>Bakery</h3>").insertAfter($menu.children().last());
                $('<ul id="bakery">').insertAfter($menu.children().last());

                if (count > 0) {
            $.each(menuItem, function (i, obj) {

                    if (obj.type === 'beverage') {

                            $('#espresso').append('<li>' + '<span>' + obj.name + '  ' + obj.price + '</span>' + '</li>');
            $('span').attr("class", "menu-item");
                    var img = $('<img />', {
                        id: obj.name,
                        src: obj.img
                            });

                            img.appendTo($('#espresso').children().last());
                        }

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


        //coffeeShopApp.weeklySpecials();

    weeklySpecials: function (data) {
    $("#specials p").remove();

    $.getJSON('data/specials.json', function (data) {
            var specialsItem = data.specials,
            count = specialsItem.length;

            if (count > 0) {
            $.each(specialsItem, function (i, obj) {


            $('#specials').append('<p>' + obj.description + '<p>');


                    });

                }

            });

        },

    }

    coffeeShopApp.buildMenu();
    coffeeShopApp.weeklySpecials();
    
//coffeeShopApp.createRegisterForm()
//function checkRegistation() {
        
    $("#register").submit(function () {
        var fullname = $("#fullname").val();
        var text = $("#email").val();
        console.log(text);

        if (text === "") {
            $("#register").before("<p>Please give your email for contact information!</p>");
        }
        //event.preventDefault();
            return false;
        
                          
 //$("#register-button").click(checkRegistation)
        
    });
    
   
    
    // Add code to get the menu data using Ajax
    // & add the menu items to the appropriate section
    // An example:
    // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>

    //}

    // Add a new method to add the weekly specials

    // Add a method to validate the registration form
    // There should be both a name and a valid email

    //}

    // Uncomment the line below to build the menu
    //coffeeShopApp.buildMenu();

    // Call the methods to add the weekly specials

    // Add code for the form submit button it should validate the form

}());