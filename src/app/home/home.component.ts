import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../employee/employee.model';
import { EmployeeService } from '../employee/employee.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-home',
    imports: [
      MatTableModule, 
      MatIconModule, 
      MatButtonModule, 
      RouterLink, 
      MatFormFieldModule, 
      MatInputModule,
      FormsModule, 
      CommonModule,
      MatSnackBarModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public employees: Employee[] = [];
  public searchQuery: string = '';
  displayedColumns = ['name', 'email', 'jobTitle', 'phone', 'department' , 'workLocation', 'actions'];

  constructor(private employeeService: EmployeeService, private route: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response: Employee[]) => {
        this.employees = response;
      },
      error: (error: HttpErrorResponse) => {
        this.snackBar.open('Błąd podczas pobierania pracowników', 'Zamknij', {
          duration: 3000
        });
        console.log(error.message);
      }
    });
  }

  public searchEmployees(): void{
    if(this.searchQuery.trim()){
      this.employeeService.searchEmployees(this.searchQuery).subscribe({
      next: (response: Employee[]) => {
        this.employees = response;
      },
      error: (error: HttpErrorResponse) => {
        this.snackBar.open('Błąd podczas wyszukiwania pracowników', 'Zamknij', {
          duration: 3000
        });
        console.log(error.message);
      }
    });
    } else {
      this.getEmployees();
    }
  }

  public viewEmployeeDetails(id: number): void {
    this.route.navigate(['/employeeDetails', id]);
  }

  public deleteEmployee(id: number, event: Event): void {
    event.stopPropagation();
    if(confirm('Czy na pewno chcesz usunąć tego pracownika?')){
      this.employeeService.deleteEmployees(id).subscribe({
        next: () => {
          this.snackBar.open('Pracownik został pomyślnie usunięty', 'Zamknij', {
            duration: 3000
          });
          this.getEmployees();
        },
        error: (error: HttpErrorResponse) => {
          this.snackBar.open('Błąd podczas usuwania pracownika', 'Zamknij', {
            duration: 3000
          });
          console.log(error.message);
        }
      });
    }
  }
}
