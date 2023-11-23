import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export default class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm !: FormGroup

  fb = inject(FormBuilder)
  route = inject(Router)
  authService = inject(AuthService)

  ngOnInit(): void {
    this.forgetPasswordForm = this.fb.group({
      email : [ '', Validators.compose([ Validators.required, Validators.email])],
    });
  }

  onSubmit(){
    this.authService.forgotPassword(this.forgetPasswordForm.value).subscribe({
      next: (res: any) => {
          alert("Reset link is sent to email address")
          this.forgetPasswordForm.reset();
      }
    })
  }

}
