import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule , ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  logForm : FormGroup; 

  constructor( 
    private fb : FormBuilder,
    private authSer : AuthService,
    private router : Router
  ){
      this.logForm = fb.group({
        email : ['' , Validators.required],
        password : ['' , Validators.required],
      })
  }

  onSubmit() {
  
    const formValue = this.logForm.value; 
    const email = formValue.email; 
    const password = formValue.password; 

    this.authSer.login(email , password).subscribe(
      (user)=>{
        if (user != null){
          this.router.navigate(['/container']);
        }
      }
    ); 
  
  }

}
