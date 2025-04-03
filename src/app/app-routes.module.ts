import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'employeePage', component: EmployeePageComponent, pathMatch: 'full' },
  { path: 'employeeDetails/:id', component: EmployeeDetailsComponent, pathMatch: 'full' },
  { path: 'departmentList', component: DepartmentListComponent, pathMatch: 'full' },
  { path: 'departmentAdd', component: DepartmentAddComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
