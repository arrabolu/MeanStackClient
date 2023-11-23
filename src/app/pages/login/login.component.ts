import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit {

  router = inject(Router)
  fb = inject(FormBuilder)
  authService = inject(AuthService)

  loginForm  !: FormGroup

  ngOnInit() {

    this.loginForm = this.fb.group({
      email : ['',Validators.compose([Validators.required, Validators.email])],
      password : ['',Validators.required]
    });

  }






  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  onLoginClicked(){
    this.authService.loginUser(this.loginForm.value).subscribe({
      next: (result)=>{
          alert("Login success")
          this.loginForm.reset();
          this.router.navigate(['/home']);
      },
      error: (err)=>{
        console.log(err);

      }
  })
  }

}
