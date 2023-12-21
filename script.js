$(document).ready(function(){
    $("#myform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            email:{
              required:true,
              email:true
            },
            password:{
              required:true,
              minlength:6
          },
          address:{
            required:true,
            minlength:4
        },
        message:{
          required:true,
          
      }
            
        }
    })
  })