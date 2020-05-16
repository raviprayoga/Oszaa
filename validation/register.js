const Validator = require("validator");
const isEmpty = require ("is-empty");

module.exports = function validateRegisterInput(data){
    let errors = {};

    //functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //name cek
    if(Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }
    //email cek
    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if (!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    //password cek
    if(Validator.isEmpty(data.password)){
        errors.password="Password field is required";
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2="Confirm password field is required";
    }
    if(!Validator.isLength(data.password, {min: 6, max: 15})){
        errors.password = "Password must be at least 6 characters";
    }
    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Password must match";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };

};