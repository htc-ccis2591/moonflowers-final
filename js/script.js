( function() {



  var coffeeShopApp = {
      buildMenu : function( data ) {

          var $menu = $("#menu");
          $("<h3 id='head1'>Beverages </h3>").insertAfter($menu.children().last());
          $('<ul id="espresso">').insertAfter($menu.children().last());

          $("<h3 id='head2'>Bakery </h3>").insertAfter($menu.children().last());
          $('<ul id="bakery">').insertAfter($menu.children().last());
          // Add code to get the menu data using Ajax
          // & add the menu items to the appropriate section
          // An example:
          // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>
          $("#head1").attr("class", "hide");
          $("#head2").attr("class", "hide");
          $.ajax
          ({
              url: "data/menu.json",
              
              success: function (data) 
            {
                var i = 0;
                for (i = 0; i < data["menu"].length; i = i + 1)
                {
                    if (data["menu"][i]["type"] == "beverage")
                    {
                        var textitem = data["menu"][i]["name"] + " " + data["menu"][i]["price"];
                        var item = $("<li>");
                        var itemspan = $("<span>").attr("class", "menu-item");
                        var source = "images/";
                        var image = $("<img>").attr("src", source + data["menu"][i]["img"]);
                        itemspan.text(textitem);
                        item.append(itemspan);
                        if (data["menu"][i]["img"] != undefined)
                            item.append(image);
                        $("#espresso").append(item);
                        $("#head1").attr("class", "");
                    }
                    
                    if (data["menu"][i]["type"] == "bakery")
                    {
                        var textitem = data["menu"][i]["name"] + " " + data["menu"][i]["price"];
                        var item = $("<li>");
                        var itemspan = $("<span>").attr("class", "menu-item");
                        var source = "images/";
                        var image = $("<img>").attr("src", source + data["menu"][i]["img"]);
                        itemspan.text(textitem);
                        item.append(itemspan);
                        if (data["menu"][i]["img"] != undefined)
                            item.append(image);
                        $("#bakery").append(item);
                        $("#head2").attr("class", "");
                    }
                }
                }
          })

      },

      // Add a new method to add the weekly specials
      addSpec : function ( data ) 
      {
        $.ajax
        ({
            url: "data/specials.json",
            
            success: function ( data )
            {
                if (data["specials"].length > 0)
                {
                    var i = 0;
                    $("#specials").children("p").remove();
                    for (i = 0; i < data["specials"].length; i = i + 1)
                    {
                        var newP = $("<p>");
                        newP.text(data["specials"][i]["description"]);
                        $("#specials").append(newP);
                    }
                }
            }
        })
      }
      // Add a method to validate the registration form
      // There should be both a name and a valid email

  }

  // Uncomment the line below to build the menu
  coffeeShopApp.buildMenu();
  coffeeShopApp.addSpec();
    function validateEmail(email)
    {
        var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return reg.test(email);
    }
    
    $("#button").click(function ()
    {
        if ($("#name").val().length > 1)
        {
            if (validateEmail($("#email").val()) == true)
            {
                $("#name").val("");
                $("#email").val("");
            }
            else
                alert("Invalid Email");
        }
        else
            alert("Invalid name");
    });
  // Call the methods to add the weekly specials

  // Add code for the form submit button it should validate the form

}())
