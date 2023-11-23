import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { apiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)

  registerUser(registerObj : any) {
   return this.http.post<any>(`${apiUrls.baseUrl}auth/register`,registerObj)
  }

  loginUser(loginObj : any) {
    return this.http.post(`${apiUrls.baseUrl}auth/login`,loginObj)
  }

  forgotPassword(forgetpasObj : any) {
    return this.http.post(`${apiUrls.baseUrl}auth/send-email`,forgetpasObj)
  }

}
