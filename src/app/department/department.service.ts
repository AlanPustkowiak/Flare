import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiServer = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  public getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiServer}/departments`);
  }

  public getDepartmentById(departmentId: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiServer}/department/${departmentId}`);
  }

  public addDepartment(depratment: Department): Observable<Department>{
    return this.http.post<Department>(`${this.apiServer}/department`, depratment);
  }

  public updateDepartment(id: number, department: Department): Observable<Department>{
    return this.http.put<Department>(`${this.apiServer}/department/${id}`, department);
  }

  public deleteDepartment(departmentId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServer}/department/${departmentId}`);
  }
}
