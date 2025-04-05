import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { DepartmentService } from '../department/department.service';
import { Department } from '../department/department.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-department-list',
  imports: [ MatCardModule, RouterLink, MatIconModule, MatButtonModule, MatSnackBarModule ],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
  departments: Department[] = [];
  private departmentsService = inject(DepartmentService);

  constructor(
    private snackBar: MatSnackBar
  ) { }

   ngOnInit(): void {
    this.getDepartments();
   }

  getDepartments(): void {
    this.departmentsService.getDepartments().subscribe({
      next: (response: Department[]) => {
        this.departments = response;
      },
      error: (error: HttpErrorResponse ) => {
        this.snackBar.open('Bład podczas pobierania departamentów', 'Zamknij', {
          duration: 3000
        });
        console.log(error);
      }
    });
  }
}
