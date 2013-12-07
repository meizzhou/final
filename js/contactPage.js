$(function() {
    $('.contactSubmit').click(function(){ 
      alert("Thank you for the message. We will get back to you soon");
      var nameInput = $('.contactform input[name="name"]');
      var nameValue = nameInput.val();
      var emailInput = $('.contactform input[name="email"]');
      var emailValue = emailInput.val();
      var web = $('.contactform input[name="website"]');
      var webValue = web.val();
      var commentInput = $('.contactform textarea[name="comment"]');
      var commentValue = commentInput.val();
      nameValue.length = 0;
      emailValue.length=0;
      commentValue.length=0;
     webValue.length=0;
    }); 
});