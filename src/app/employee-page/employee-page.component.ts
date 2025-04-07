import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
    selector: 'app-employee-page',
    providers: [
      {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
      {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
    ],
    imports: [
      MatFormFieldModule, 
      MatInputModule, 
      MatButtonModule, 
      FormsModule, 
      MatOptionModule, 
      ReactiveFormsModule,
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
  hireDateControl = new FormControl(new Date());

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<Date>

  ) { 
    this.dateAdapter.setLocale('pl-PL');
  }

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
    this.employee.hireDate = this.hireDateControl.value || new Date();
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
