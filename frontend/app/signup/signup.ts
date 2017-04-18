import { Component } from '@angular/core';
import { SignupForm } from './signup.form';


@Component({
  moduleId: module.id,
  selector: 'signup-cmp',
  templateUrl: 'signup.html'
})
export class SignupComponent { 
 
  user = new SignupForm('','','','','','','','');
  submitted = false;
 
  name = 'select';
  onSubmit(value : any){
    console.log(value);
  }
}