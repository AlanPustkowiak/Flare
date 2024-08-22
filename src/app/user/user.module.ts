export interface IUser {
  name: string;
  phone: string;
  email: string;
  jobTitle: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}