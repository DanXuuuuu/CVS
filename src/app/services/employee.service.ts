import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}
  getEmployees(): Observable<Users> {
    return this.http.get<Users>(this.apiUrl);
  }
}
