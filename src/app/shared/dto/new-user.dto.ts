export type CreateUserDto = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle?: string;
  workEmail: string;
  password: string;
}
