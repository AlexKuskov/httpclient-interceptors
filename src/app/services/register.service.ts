import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register.model';
import { Credentials } from '../models/credentials.model';

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

  register(credentials: Credentials): Observable<Register> {
    return this.http.post<Register>(this.ROOT_URL, credentials, this.options);
  }
}
