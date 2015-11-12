( function() {

//    var menujson = [];
//    var specialsjson = [];
    
    $( document ).ready(function() {
        
        $("#register").submit(function() {
            
        var text = $("#email").val();
       console.log(text) ;       
        
        if (text === "") {
            $("#register").before("<p>Email can't be blank!</p>");
        }
            return false;      
    });
 
        $.ajax({
            type: 'GET',
            url: 'data/specials.json', 
            dataType: 'json', 
            success: function(data) {
            
            //console.log(data.specials);
        },
        
            error: function () {
                
         alert('An AJAX error occured.. hang on a sec..');
            }      
            
        });

  var coffeeShopApp = {
      buildMenu : function( data ) {

          var $menu = $("#menu");
          $("<h3>Beverages</h3>").insertAfter($menu.children().last());
          $('<ul id="beverage">').insertAfter($menu.children().last());

          $("<h3>Bakery</h3>").insertAfter($menu.children().last());
          $('<ul id="bakery">').insertAfter($menu.children().last());
          
          $("h3").click(function(){
    if($(this).find("ul").length){
        window.location.href = $(this).find("a:first").attr("href");
    }
});
          
          //testing menu functions...
          
//           if (count > 0) {
//                    $.each(menuBook, function (i, obj) {
//                        
//                    if (obj.type === 'beverage'){        
//                    $('#espresso').append('<li>'+ '<span>' + obj.name + '  ' + obj.price + '</span>' + '</li>');
//                        $('span').attr("class", "menu-item");
//                        var img = $('<img />', { 
//                          id: obj.name,
//                          src: obj.img
//                        });
//                        img.appendTo($('#espresso').children().last());
//                } // end if
//                   
//                    if (obj.type === 'bakery'){
//                        
//                    $('#bakery').append('<li>'+ '<span>' + obj.name + '  ' + obj.price + '</span>' + '</li>');
//                            $('span').attr("class", "menu-item");
//                            var img = $('<img />', { 
//                              id: obj.name,
//                              src: obj.img
//                            });
//                            img.appendTo($('#bakery').children().last());
//                    } 
//          
      }
  }
          
          

          // Add code to get the menu data using Ajax
      
          
          // & add the menu items to the appropriate section
          // An example:
          // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>

            
      // Add a new method to add the weekly specials

      // Add a method to validate the registration form
      // There should be both a name and a valid email
      
      
  
                           
        
  
      function validation(){
      var emailString = $("#email-field").val();
       var namestring = $("#name-field").val();
     
       if (!(emailString.indexOf(".com") > 0 && emailString.indexOf("@") > 0)) {
           alert("Email Format Is Incorrect");
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

// set handler to validate the form
// onsubmit used for easier cross-browser compatibility
//        
//        var testresults
//function checkemail(){
//var str=document.validation.emailcheck.value
//var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
//if (filter.test(str))
//testresults=true
//else{
//alert("Please input a valid email address!")
//testresults=false
//}
//return (testresults)
//}
        
//function checkbae(){
//if (document.layers||document.getElementById||document.all)
//return checkemail()
//else
//return true
//}

    // event listener for submit button
   $("#register-button").click(validation)
   
      
      
//       function validateEmail(email) 
//    {
//        var re = /^\S+@\S+\.\S+$/;
//    return re.test(email);
//}


  // Uncomment the line below to build the menu
  coffeeShopApp.buildMenu();

  // Call the methods to add the weekly specials

  // Add code for the form submit button it should validate the form

  });
}());
