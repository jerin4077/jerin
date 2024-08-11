$(document).ready(function(){
    $("#form1").validate({
        rules:{
            username:{
                required: true,
                minlength: 4
            },
            contactno:{
                required: true,
                Number:true
            },
            emailadd:{
                required:true,
                email: true
            },
            password:{
                minlength:6
            },
            cpassword:{
                minlength:6,
                equalTo: "#password"
            }

        },
        messages:{
            required:"Enter the values",
            minlength:"Enter atleast 4 charectors"
        }
    })
})
jQuery.validator.addMethod("passwordCheck",
    function(value, element, param) {
        if (this.optional(element)) {
            return true;
        } else if (!/[A-Z]/.test(value)) {
            return false;
        } else if (!/[a-z]/.test(value)) {
            return false;
        } else if (!/[0-9]/.test(value)) {
            return false;
        }

        return true;
    },
    "Password must contain an Uppercase charector and lower case and also numbers");