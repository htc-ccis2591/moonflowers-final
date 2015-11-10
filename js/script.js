( function() {

  var coffeeShopApp = {
        buildMenu : function( data ) {
            $.getJSON('data/menu.json', function (data) {        
                var menuBook = data.menu,
                    count = menuBook.length;
                      var $menu = $("#menu");
                      $("<h3>Beverages</h3>").insertAfter($menu.children().last());
                      $('<ul id="espresso">').insertAfter($menu.children().last());

                      $("<h3>Bakery</h3>").insertAfter($menu.children().last());
                      $('<ul id="bakery">').insertAfter($menu.children().last());
                
                if (count > 0) {
                    $.each(menuBook, function (i, obj) {
                        
                    if (obj.type === 'beverage'){        
       
                    $('#espresso').append('<li>'+ '<span>' + obj.name + '  ' + obj.price + '</span>' + '</li>');
                        $('span').attr("class", "menu-item");
                        var img = $('<img />', { 
                          id: obj.name,
                          src: obj.img
                        });
                        img.appendTo($('#espresso').children().last());
                } // end if
                   
                    if (obj.type === 'bakery'){
                        
                    $('#bakery').append('<li>'+ '<span>' + obj.name + '  ' + obj.price + '</span>' + '</li>');
                            $('span').attr("class", "menu-item");
                            var img = $('<img />', { 
                              id: obj.name,
                              src: obj.img
                            });
                            img.appendTo($('#bakery').children().last());
                    } // end if
                        
                    
                    }); // end each
                
                } // end count check
            
            }); // end ajax call
            

          // Add code to get the menu data using Ajax
          // & add the menu items to the appropriate section
          // An example:
          // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>

      },//end of buildMenu

      // Add a new method to add the weekly specials
      weeklySpecials : function( data ) {
          $( "#specials p" ).remove();
          
           $.getJSON('data/specials.json', function (data) {        
                var specialsBook = data.specials,
                    count = specialsBook.length;

                if (count > 0) {
                    $.each(specialsBook, function (i, obj) {
          
          
                    $('#specials').append('<p>' + obj.description + '<p>');
          
          
                    }); // end each
                
                } // end count check
            
            }); // end ajax call

          
      },//end of weeklySpecials

      // Add a method to validate the registration form
      // There should be both a name and a valid email

  }//endof coffeShopApp
  

  // Uncomment the line below to build the menu
  
  coffeeShopApp.buildMenu();

  // Call the methods to add the weekly specials
  coffeeShopApp.weeklySpecials();

  // Add code for the form submit button it should validate the form

                $("#register").submit( function() {
                var fullname = $("#fullname").val();
                var text = $("#email").val();

                if (text === "" & fullname === "") {
                  $("#register").before("<p>Please fill out the form.</p>");
                  return false;
                }   
                  
                else {
                  $("#fullname").empty();
                  $("#email").empty();
                    return true;
                }

              });

    
//            $('#validate').click(function() {  
//                $(".error").hide();
//                    var hasError = false;
//                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//                    var emailblockReg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
//
//                    var emailaddressVal = $("#email").val();
//                    if(emailaddressVal == '') {
//                      $("#email").after('<span class="error">  Please enter your email address.</span>');
//                      hasError = true;
//                    }
//
//                    else if(!emailReg.test(emailaddressVal)) {
//                      $("#email").after('<span class="error">  Enter a valid email address.</span>');
//                      hasError = true;
//                    }
//                
//                
//                    else if(!emailblockReg.test(emailaddressVal)) {
//                      $("#email").after('<span class="error">No yahoo, gmail or hotmail emails.</span>');
//                      hasError = true
//                    } 
//
//                    if(hasError == true) { 
//                          return false; }
//                
//
//            });
//    
// http://www.designchemical.com/blog/index.php/jquery/email-validation-using-jquery/
  
}())//end of anonymouse function
