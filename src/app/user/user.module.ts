export interface IUser {
  name: string;
  phone: string;
  email: string;
  jobTitle: string;
  department: string;
  team: string;
  dateOfBirth: Date;
  pesel: string;
  localization: string;
  city: string;
}

export interface ILogin {
  email: string;
  password: string;
}