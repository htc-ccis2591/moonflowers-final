
(function() {


  var coffeeShopApp = {
      buildMenu : function( data ) {

          var $menu = $("#menu");
          $('<h3 id ="drinks">Beverages</h3>').insertAfter($menu.children().last());
          $('<ul id="espresso">').insertAfter($menu.children().last());

          $('<h3 id ="bake">Bakery</h3>').insertAfter($menu.children().last());
          $('<ul id="bakery">').insertAfter($menu.children().last());
          // Add code to get the menu data using Ajax
          $.getJSON("data/menu.json", function (data) {
           var menuItems = data.menu,
           count = menuItems.length;
              
           if( count > 0){
               $.each(menuItems, function(i, obj){
                   if(obj.type === "bakery"){
                       $("#bakery").add(obj.name);
                        if(typeof(obj.img)=== "undefined"){
                         $("#bake").append('<br/>' + obj.name + obj.price);
                        }
                       else{   
                       $("#bake").append('<br/>' + obj.name + obj.price + '<img src="' + obj.img +'">');
                       }
                      
                   }
                   if(obj.type === "beverage"){
                       $("#espresso").add(obj.name);
                      
                       if(typeof(obj.img)=== "undefined"){
                       $("#drinks").append('<br/>' + obj.name + obj.price);
                       }
                       else{
                       $("#drinks").append('<br/>' + obj.name + obj.price + '<img src="' + obj.img +'">');
                       }
                   }
//                  menuItems.push("<li>" + "<span class =menu-item"> + obj.type + obj.price + "<span/><img src=obj.img><li/>");
           });
          }
          // & add the menu items to the appropriate section
          // An example:
          // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>

      });
                    },
      weeklySpecials : function(){
        
      

//       Add a new method to add the weekly specials
      $.getJSON("data/specials.json", function (data) {
    
      
      var specials = data.specials,
      count = specials.length;
      
      if(count > 0){  
      $("#specials p").remove();    
      $.each(specials, function(i, obj){
      $("#specials").append("<p>" + obj.description + "<p/>");
          
  });
}
 });
},
//       Add a method to validate the registration form
      $("#register").submit(function() {
      var vEmail = $("#email").Val();
      console.log(vEmail);
      if(vEmail === ""){
      $("#register").before("<p>Email can't be empty!</p>");
  }
    return false;  
      
      
  });
    
 

  }
  
      // There should  be both a name and a valid email

 

  // Uncomment the line below to build the menu
  coffeeShopApp.buildMenu();
coffeeShopApp.weeklySpecials();

  // Call the methods to add the weekly specials

  // Add code for the form submit button it should validate the form

}())
