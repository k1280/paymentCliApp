export interface Customer {
    // name: string;
    // surname: string;
    // totalAmount?: number;
    name: string;
    address?: {
        street?: string;
        postcode?: string;
    }
}