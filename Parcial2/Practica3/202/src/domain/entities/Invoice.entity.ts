export class InvoiceEntity {
    private constructor(
        public customerId: number,
        public date: Date,
    ) { }

    public static fromObject(object: { [key: string]: any }): InvoiceEntity {
        const { customerId, date } = object;
        if (!customerId) throw 'customerID is required';
        if (!date) throw 'date is required';

        return new InvoiceEntity(customerId, date);
    }
}
