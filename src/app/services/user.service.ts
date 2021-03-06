import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';
  options = {
    params: { page: '2' },
    headers: { 'Authorization': 'i2ojjfsoiejfs9' }
  }

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<Page>(this.ROOT_URL, this.options).pipe(
      map(({ data }) => data)
    );
  }

  createUser(): Observable<User> {
    return this.http.post<User>(this.ROOT_URL, {
      name: "morpheus",
      job: "leader"
    });
  }
}
