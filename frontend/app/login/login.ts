import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.html'
})
export class LoginComponent { 
  name = 'LoginComponent'; 
  username ='Username';
  password ='Password';
  student = 'Student';
  accommodator ='Accommodator';
  signup ='SignUp';
}