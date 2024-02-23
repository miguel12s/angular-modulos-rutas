import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm!:FormGroup 
  public fb=inject(FormBuilder)
  
constructor(){
  this.loginForm=this.initForm()
}

initForm():FormGroup{
  return this.fb.group({
    email:['',Validators.required,Validators.email],
    password:['',Validators.required,Validators.minLength(6)]
  }) 
}



}
