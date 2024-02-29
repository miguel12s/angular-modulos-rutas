import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public fb = inject(FormBuilder)
  public user!:FormGroup
  // public service=inject(UserService)
  public imageSrc!: string 
  constructor(){
    this.user=this.initForm()
  }

  initForm(): FormGroup {
    return this.fb.group(
      {
        nombres: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(30)]],
        profesion: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
        numero: ['', [Validators.required,Validators.min(3000000000),Validators.max(3250000000)]],
        correo:['',[Validators.pattern('.*@(unibarranquilla\.edu\.co|itsa\.edu\.co)$')]],
        password: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
        
      },
      
     


    )
  }
  onSubmit(){
   const user:any= this.user.value
  //  user.telefono=this.service.formatPhone(telefono)

    
    console.log(user);
    
    // this.service.addSuperhero(user)
  }
}
