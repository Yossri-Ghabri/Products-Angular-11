import { Role } from './role';

export class User {
  id!: string;
  title!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  product!: string;
  prix!: string;
  role!: Role;
  isDeleting: boolean = false;
}
