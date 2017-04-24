"use strict";
var SignupForm = (function () {
    function SignupForm(firstname, lastname, usertype, email, password, education, major, gender, about) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.usertype = usertype;
        this.email = email;
        this.password = password;
        this.education = education;
        this.major = major;
        this.gender = gender;
        this.about = about;
    }
    return SignupForm;
}());
exports.SignupForm = SignupForm;
