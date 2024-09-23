export interface IUser {
  name: string;
  phone: string;
  email: string;
  jobTitle: string;
  department: string;
  dateOfBirth: Date;
  workLocation: string;
}

export interface ILogin {
  email: string;
  password: string;
}