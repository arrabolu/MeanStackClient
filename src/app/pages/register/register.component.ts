import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordVal } from 'src/app/validators/confirmpassword.validator';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent implements OnInit {


  fb = inject(FormBuilder);
  route = inject(Router)
  authService = inject(AuthService);

  registerForm !: FormGroup

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.compose([Validators.email, Validators.required])],
      userName : ['', Validators.required],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required],

    },
    {
      validator : confirmPasswordVal('password','confirmPassword')
    }
    );
  }


  register(){

    this.authService.registerUser(this.registerForm.value).subscribe({
      next :(result)=>{
        alert("User registration Successful!");
        this.registerForm.reset()
        this.route.navigate(['/login']);
    },
    error : (err)=>{

    }
  });
  }

  navigateToLogin(){
    this.route.navigate(['/login']);
  }


}
