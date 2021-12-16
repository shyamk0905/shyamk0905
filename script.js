$(document).ready(function(){
    $().addClass("red");
    $("#submit-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:3,
                maxlength:20, 
            },
            lname:{
                required:true,
                minlength:3,
                maxlength:20
            },
            email:{
                required:true,
                email:true
            },
            mobile:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            },
            messaging:{
                required:true,
                minlength:3
            }
            
        },
        messages:{
            fname:{
                required:"Enter your name",
                minlength: "Please enter atleast 3 characters",
                
            },
            lname:{
                required:"Enter your lname",
                minlength: "Please enter atleast 3 characters"
            },
            email:{
                required:"Enter your email"
            },
            mobile:{
                required:"Enter your Mobile number",
                number:"Please use numbers"
            },
            messaging:{
                required:"Please provide a message"
            }
            
            
            

        }
        
    })
})