import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Employee, EmployeeStatus } from '../employee/employee.model';
import { EmployeeService } from '../employee/employee.service';
import { DepartmentService } from '../department/department.service';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Department } from '../department/department.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-employee-page',
    imports: [
      MatFormFieldModule, 
      MatInputModule, 
      MatButtonModule, 
      FormsModule, 
      MatOptionModule, 
      MatSnackBarModule,
      MatDatepickerModule,
      MatSelectModule,
      MatNativeDateModule,
      RouterLink,
      CommonModule
    ],
    templateUrl: './employee-page.component.html',
    styleUrl: './employee-page.component.css'
})
export class EmployeePageComponent implements OnInit {
  public employee: Employee = {
    name: '',
    email: '',
    jobTitle: '',
    phone: '',
    workLocation: '',
    department: {
      id: 0,
      name: ''
    },
    hireDate: new Date(),
    status: EmployeeStatus.ACTIVE
  };

  public departments: Department[] = [];
  public statuses = Object.values(EmployeeStatus);

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private router: Router,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.loadDepartments();
  }

  private loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (response: Department[]) => {
        this.departments = response;
      },
      error: (error: HttpErrorResponse) => {
        this.snackBar.open('Failed to load departments', 'Dismiss', {
          duration: 3000
        });
        console.log(error);
      }
    });
  }

  public addEmployee(): void {
    this.employeeService.addEmployees(this.employee).subscribe({
      next: (response: Employee) => {
        this.snackBar.open('Employee added successfully', 'Dismiss', {
          duration: 3000
        });
        this.router.navigate(['/home']);
      },
      error: (error: HttpErrorResponse) => {
        this.snackBar.open('Failed to add employee', 'Dismiss', {
          duration: 3000
        });
        console.log(error);
      }
    });
  }
}
