import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { Department } from '../department/department.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServer = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServer}/employees`);
  }

  public getEmployeeById(emplyeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServer}/employee/${emplyeeId}`);
  }

  public addEmployees(emplyee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServer}/employees`, emplyee);
  }

  public updateEmployees(emplyee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServer}/employees/${emplyee}`, emplyee);
  }

  public deleteEmployees(emplyeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServer}/employees/${emplyeeId}`);
  }

  public searchEmployees(query: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServer}/employees/search?query=${query}`);
  }

  public getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiServer}/departments`);
  }
}
