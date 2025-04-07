import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Department } from '../department/department.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DepartmentService } from '../department/department.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-department-add',
  imports: [ FormsModule, MatFormFieldModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './department-add.component.html',
  styleUrl: './department-add.component.css'
})
export class DepartmentAddComponent {
  public department: Department = {
    name: '',
    description: ''
  };

  constructor(
    private departmentService: DepartmentService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {  }

  public addDepartment(): void {
    this.departmentService.addDepartment(this.department).subscribe({
      next: (response: Department) => {
        this.snackBar.open('Dodano nowy dział', 'Zamknij', {
          duration: 3000
        });
        this.router.navigate(['/departmentList']);
      },
      error: (error) => {
        this.snackBar.open('Błąd podczas dodawania działu', 'Zamknij', {
          duration: 3000
        });
        console.log(error.message);
      }
    });
  }
}
