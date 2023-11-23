import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { confirmPasswordVal } from 'src/app/validators/confirmpassword.validator';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export default class ResetComponent implements OnInit {

  fb = inject(FormBuilder);
  route = inject(Router);
  authService = inject(AuthService);
  activatedRoute = inject(ActivatedRoute);

  resetForm !: FormGroup;
  token: any;

  ngOnInit(): void {

    this.resetForm = this.fb.group({
      newPassword : ['', Validators.required],
      confirmNewPassword : ['', Validators.required]
    },
    {
      validator : confirmPasswordVal('newPassword','confirmNewPassword')
    }
    );

    this.activatedRoute.params.subscribe((params) => {
      this.token = params['token']
    })

  }

  onReset(){
    console.log(this.resetForm.value);
    console.log(this.token);
  }

}
