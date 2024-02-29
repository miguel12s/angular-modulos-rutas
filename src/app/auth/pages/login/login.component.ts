import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../shared/components/alert/alert.service';
import { Observable, tap } from 'rxjs';
import { IAlert } from '../../../shared/components/alert/alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm!:FormGroup 
  public fb=inject(FormBuilder)

constructor(private alertService:AlertService){
  this.loginForm=this.initForm()
}

initForm():FormGroup{
  return this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  }) 
} 

onSubmit(){

  if(!this.loginForm.valid){
    this.alertService.show({message:'Por favor , complete los campos requeridos',show:true,type:'danger'})

  }


}

changePrimary(){
this.alertService.show({message:'primary',show:true,type:'info'})
}

changeSuccess(){
  this.alertService.show({message:'success',show:true,type:'success'})

}

changeWarning(){
  this.alertService.show({message:'warning',show:true,type:'warning'})

}
changeInfo() {
  this.alertService.show({message:'warning',show:true,type:'info'})
  }
  changeDanger() {
    this.alertService.show({message:'warning',show:true,type:'danger'})
  }


}
