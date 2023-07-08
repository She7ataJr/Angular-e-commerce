import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(private _fb:FormBuilder,private _AuthService:AuthService,private _Router:Router){
    if(localStorage.getItem('token')!= null){
      _Router.navigate(['/home'])
    }
  }


    LoginForm : FormGroup = this._fb.group({
      email:['',[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  
    get email():AbstractControl | null{
      return this.LoginForm.get('email')
    }
  
    get password():AbstractControl | null{
      return this.LoginForm.get('password')
    }
  
    login():void{
      console.log(this.LoginForm.value);
      try {
        this._AuthService.loginHandle(this.LoginForm.value).subscribe({
          next:(response)=>{
            console.log(response);
            if(response.message=='success'){
              localStorage.setItem("token",response.token)
              this._AuthService.userToken = response.token
              this._Router.navigate(['/home'])
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
