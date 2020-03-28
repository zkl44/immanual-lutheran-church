(function aboutMeIIFE() { 
  
  //add the class was-validated to form to check inputs on client side, the code inside after this only runs if server side testing passes
  $( "#submit" ).click(function() {
    $('#theForm').addClass('was-validated');
  });
    

  //this code allows the form on my page to work without page refresh.. which was bringing user to top of page everytime  

  $('form.ajax').on('submit', function(){  //this function stops the load 
    
   var that = $(this),  //this represents the object we are in (form.ajax)
      url = that.attr('action'),
      type = that.attr('method')
      data = {};
      
    //only interested in elements with name
    that.find('[name]').each(function(index, value) {
      console.log(value);
      
      var that = $(this),
      name = that.attr('name'),
      value = that.val();
      
      data[name] = value;
      
    });
   
   console.log(data);
   
   
   $.ajax({
     
     url: url,
     type: type,
     data: data,
     success: function(response) {
       console.log(response + " this is the response");
       var putHere = document.getElementById("resultHere");
       putHere.innerHTML = response;
       
     }
  
    
   });
   
   return false;
});
  
})();