import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NgFor, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public employees: Employee[] = [];
  displayedColumns = ['name', 'jobTitle', 'phone', 'email'];

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
