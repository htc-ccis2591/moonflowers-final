var menujson = [];
var specialsjson = [];

(function () {
    
    // Setting What Object To Use For AJAX
    function getHTTPObject() {

        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }

        return xhr;
    }
   
  
  var coffeeShopApp = {
      buildMenu : function( data ) {

          var $menu = $("#menu");
          $("<h3>Beverages</h3>").insertAfter($menu.children().last());
          $('<ul id="beverage">').insertAfter($menu.children().last());
          
          $("<h3>Bakery</h3>").insertAfter($menu.children().last());
          $('<ul id="bakery">').insertAfter($menu.children().last());

          // Add code to get the menu data using Ajax
          // get data from menu json and then organize them by catagory, displaying them into the html.
          var request = getHTTPObject();
          request.open("GET", "data/menu.json", true);
          request.send(null);
          request.onreadystatechange = function () {
              var text;
              if (request.readyState === 4 && request.status === 200) {
                  text = request.responseText;
                  menujson = JSON.parse(text);
                  createlist();
              }
          }

          // & add the menu items to the appropriate section
          // An example:
          // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>
          // createlist function called when onstateready == 4 
          function createlist() {
              for (i = 0; i < menujson.menu.length; i++) {
                  if (menujson.menu[i].type == "bakery") {
                  
                      $("#bakery").append("<li class='menu-item'>" + "<strong>" + menujson.menu[i].name + "</strong>" + " ------- " + "<strong>" + menujson.menu[i].price + "</strong>" + "</li>")
                  }
                  else if (menujson.menu[i].type == "beverage") {
                      $("#beverage").append("<li class='menu-item'>" + "<strong>" + menujson.menu[i].name + "</strong>" + " ------- " +"<strong>"+ menujson.menu[i].price +"</strong>"+ "</li>")
                  }
              }
          }
  
          
      },
      setspecials: function () {
          // ajax call to the specials json
          var request = getHTTPObject();
          request.open("GET", "data/specials.json", true);
          request.send(null);
          request.onreadystatechange = function () {
              var text;
              if (request.readyState === 4 && request.status === 200) {
                  text = request.responseText;
                  specialsjson = JSON.parse(text);
                  postSpecials();
              }
          }
     
      // Add a new method to add the weekly specials
          function postSpecials() {
              if (specialsjson.specials.length > 0) {
                  $("#specials").children("p").remove();

                  for (i = 0; i < specialsjson.specials.length; i++) {
                      $("#specials").append("<p>" + specialsjson.specials[i].description + "</p>")
                  }
              }
          }
      },
      createNewsLetterForm: function () {
         
          $("aside").append("<form  onsubmit='return checksubmission()' id='news-letter-form'></form>");
          $("#news-letter-form").append("Name: <input type='text' id ='name-field' class ='newletterinput' name='fullname'><br>Email: <input type='text' id ='email-field' class ='newletterinput' name='email'><br><input type='submit' id ='register-button' class ='newletterinput' value='Register'>")
          $(".newletterinput").css("margin-top", 15);
      }

      // Add a method to validate the registration form
      // There should be both a name and a valid email

  }

    // Uncomment the line below to build the menu
  coffeeShopApp.buildMenu();

  // Call the methods to add the weekly specials
  coffeeShopApp.setspecials();

    // Add code for the form submit button it should validate the form

    // creates the user input fields and submit button 
  coffeeShopApp.createNewsLetterForm()
    // function that validates the user given values 
   function checksubmission(){
       var emailString = $("#email-field").val();
       var namestring = $("#name-field").val();
     
       if (!(emailString.indexOf(".com") > 0 && emailString.indexOf("@") > 0)) {
           alert("Email Format Is Incorret");
           return false;
       }
       else if(namestring.length < 2){
           alert("Name Cannot Be Less Than 2 Letters");
           return false;
       }
       else{
           return true
       }
   }
    // event listener for submit button
   $("#register-button").click(checksubmission)
}())
