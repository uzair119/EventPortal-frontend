import { Role } from './role';

export class User {
    id: number;
    username: string;
    password: string;
    active: boolean;
    cnic: string;
    contactNum: string;
    email: string;
    firstname: string;
    lastname: string;
    role: Role;
}
