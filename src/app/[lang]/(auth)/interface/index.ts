export interface FieldType {
  username: string;
  password: string;
  remember?: string;
}

export enum enumField {
  Username = "username",
  Password = "password",
  Remember = "remember",
}

export interface FieldRegisterType extends FieldType {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export enum enumRegisterField {
  Username = "username",
  Password = "password",
  Remember = "remember",
  FirstName = "first_name",
  LastName = "last_name",
  Email = "email",
  PhoneNumber = "phone_number",
}
