import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { DepartmentService } from '../department/department.service';
import { Department } from '../department/department.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-department-list',
  imports: [ MatCardModule, RouterLink, MatIconModule, MatButtonModule ],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
  departments: Department[] = [];
  private departmentsService = inject(DepartmentService);

  constructor() {
   }

   ngOnInit(): void {
    this.getDepartments();
   }

  getDepartments(): void {
    this.departmentsService.getDepartments().subscribe({
      next: (response) => {
        this.departments = response;
      },
      error: (error) => {
        console.error('Error fetching departments:', error);
      }
    });
  }
}
