$(document).ready(function() {
    $("#registrationForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            password: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            country: "required",
            state: "required",
            district: "required",
            gender: "required"  // Add validation for gender
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 2 characters long"
            },
            email: {
                required: "Please enter a valid email address",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number",
                digits: "Please enter only digits",
                minlength: "Phone number must be 10 digits long",
                maxlength: "Phone number must be 10 digits long"
            },
            password: {
                required: "Please provide a password",
                minlength: "Password must be at least 6 characters long"
            },
            confirmPassword: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            },
            country: "Please select a country",
            state: "Please select a state",
            district: "Please select a district",
            gender: "Please select your gender"  // Message for gender validation
        },
        submitHandler: function(form) {
            form.submit();
            window.location.href = "./login.html";
        }
    });

    // Custom method to check radio button selection
    $.validator.addMethod("radioRequired", function(value, element, name) {
        return $('input[name="' + name + '"]:checked').length > 0;
    }, "Please select an option.");

    // Apply the custom method to gender
    $("#registrationForm").validate({
        rules: {
            gender: {
                radioRequired: true
            }
        },
        messages: {
            gender: {
                radioRequired: "Please select your gender"
            }
        }
    });
});
