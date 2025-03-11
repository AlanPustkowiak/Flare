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
}
