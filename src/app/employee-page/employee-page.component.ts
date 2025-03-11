import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Employee, EmployeeStatus } from '../employee/employee.model';

@Component({
    selector: 'app-employee-page',
    imports: [MatFormField, MatInputModule, MatButton, FormsModule],
    templateUrl: './employee-page.component.html',
    styleUrl: './employee-page.component.css'
})
export class EmployeePageComponent {
  public employee: Employee = {
    name: '',
    email: '',
    jobTitle: '',
    phone: '',
    workLocation: '',
    dateOfBirth: new Date(),
    department: {
      id: 0,
      name: ''
    },
    hireDate: new Date(),
    status: EmployeeStatus.ACTIVE
  };

  constructor() { }

  public addEmployee(employee: Employee): void {
    
  }
}
