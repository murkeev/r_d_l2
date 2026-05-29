import type { Address } from "./address.ts";
import type { Company } from "./company.ts";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: Company;
    address: Address;
}