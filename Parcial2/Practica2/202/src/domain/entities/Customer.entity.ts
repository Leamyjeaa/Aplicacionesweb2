import { Invoice } from ".prisma/client";
import { InvoiceEntity } from "./Invoice.entity";

export class CustomerEntity {
    private constructor(
        public email: string,
        public password: string,
        public name: string,
        public lname: string,
        public phone: string,
        public idCard: string,
        public Company: string,
        public city: string | null,
        public job: string,
        public invoces?: InvoiceEntity[],
    ) { }

    public static fromObject(object: { [key: string]: any }): CustomerEntity {
        const { email, password, name, lname, phone, idCard, Company, city, job } = object;
        if (!email) throw 'email is required';
        if (!password) throw 'password is required';
        if (!name) throw 'name is required';
        if (!lname) throw 'lname is required';
        if (!phone) throw 'phone is required';
        if (!idCard) throw 'idCard is required';
        if (!Company) throw 'Company is required';
        if (!city) throw 'city is required';
        if (!job) throw 'job is required';

        return new CustomerEntity(email, password, name, lname, phone, idCard, Company, city, job);
    }
}

