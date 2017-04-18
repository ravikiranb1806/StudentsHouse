"use strict";
var SignupForm = (function () {
    function SignupForm(FirstName, LastName, Email, Password, Retype, Education, Major, AboutYou) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
        this.Retype = Retype;
        this.Education = Education;
        this.Major = Major;
        this.AboutYou = AboutYou;
    }
    return SignupForm;
}());
exports.SignupForm = SignupForm;
