import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Employee } from '../employee.model';

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
    workLocation: ''
  };

  constructor() { }

  public addEmployee(employee: Employee): void {
    // employee.addEmployees(this.employee).subscribe(
    //   (response: Employee) => {
    //     console.log(response);
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }
}
