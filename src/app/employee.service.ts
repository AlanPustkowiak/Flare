import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServer = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServer}/employee/all`);
  }

  public addEmployees(emplyee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServer}/employee/add`, emplyee);
  }

  public updateEmployees(emplyee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServer}/employee/update`, emplyee);
  }

  public deleteEmployees(emplyeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServer}/employee/delete/${emplyeeId}`);
  }
}
