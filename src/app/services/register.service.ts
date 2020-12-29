import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  ROOT_URL = 'https://reqres.in/api/register';
  options = {
    headers: {
      'Authorization': 'i2ojjfsoiejfs9'
    }
  }

  constructor(private http: HttpClient) {}

  register(): Observable<Register> {
    return this.http.post<any>(this.ROOT_URL, {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }, this.options);
  }
}
