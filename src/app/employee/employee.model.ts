import { Department } from "../department/department.model";


export interface Employee {
    id?: number;
    name: string;
    email: string;
    phone: string;
    jobTitle: string;
    dateOfBirth?: Date;
    department: Department;
    workLocation: string;
    hireDate: Date;
    status?: EmployeeStatus;
}

export enum EmployeeStatus {
    ACTIVE = 'ACTIVE',
    ON_LEAVE = 'ON_LEAVE',
    TERMINATED = 'TERMINATED'
}