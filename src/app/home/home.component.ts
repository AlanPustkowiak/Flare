import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../employee/employee.model';
import { EmployeeService } from '../employee/employee.service';

@Component({
    selector: 'app-home',
    imports: [MatTableModule, MatIconModule, MatButtonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public employees: Employee[] = [];
  displayedColumns = ['name', 'jobTitle', 'phone', 'email', 'workLocation'];

  constructor(private employeeService: EmployeeService, private route: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response: Employee[]) => {
        this.employees = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    });
  }

  public futureModal(): void {
    this.route.navigate(['/employeePage']);
  }
}
