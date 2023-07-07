import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,AbstractControl,FormBuilder}from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  constructor(private _fb:FormBuilder,private _AuthService:AuthService, private _Router:Router){}

  
  customValidation=(group:AbstractControl)=>{
    const password=group.get('password')?.value
    const rePassword=group.get('rePassword')?.value

    if(password !== rePassword){
      group.get('rePassword')?.setErrors({notMatch:true})
    }
  }

  registerForm : FormGroup = this._fb.group({
    name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12),Validators.pattern(/^[a-zA-Z]{4,12}$/)]],
    email:['',[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]],
    rePassword: [''],
    phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]
  },{validators:this.customValidation})

  get name():AbstractControl | null{
    return this.registerForm.get('name')
  }

  get email():AbstractControl | null{
    return this.registerForm.get('email')
  }

  get password():AbstractControl | null{
    return this.registerForm.get('password')
  }

  get rePassword():AbstractControl | null{
    return this.registerForm.get('rePassword')
  }

  get phone():AbstractControl | null{
    return this.registerForm.get('phone')
  }
  register():void{
     console.log(this.registerForm.value);
    try {
      this._AuthService.registerHandle(this.registerForm.value).subscribe({
        next:(response)=>{
          console.log(response);
          if(response.message=='success'){
            this._Router.navigate(['/login'])
          } 
        },
        error(err) {
          // console.log(err.error.errors.msg)
        },
      
      })
    } catch (error) {
      console.log(error);
      
    }
  }
}
