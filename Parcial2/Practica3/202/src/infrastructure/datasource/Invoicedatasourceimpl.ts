import { prisma } from '../../data/postgres';
import { CreateInvoiceDto, InvoiceDatasource, InvoiceEntity, UpdateInvoiceDto } from '../../domain';


export class CustomerDatasourceImpl implements InvoiceDatasource {

    async create( CreateInvoiceDto: CreateInvoiceDto): Promise<InvoiceEntity> {
        const invoice = await prisma.invoice.create({
          data: CreateInvoiceDto!
        });

        return InvoiceEntity.fromObject(invoice);
    }

    async getAll(): Promise<InvoiceEntity[]> {
        const invoices = await prisma.invoice.findMany();
        return invoices.map((customer: { [key: string]: any; }) => InvoiceEntity.fromObject(customer));
    }

    async findById(id: number): Promise<InvoiceEntity> {
        const invoice = await prisma.customer.findFirst({
            where: { id }
        });

        if (!invoice) throw `Customer with id ${id} not found`;
        return InvoiceEntity.fromObject(invoice);
    }

    async updateById(UpdateInvoiceDto: UpdateInvoiceDto): Promise<InvoiceEntity> {
        await this.findById(UpdateInvoiceDto.id);

        const updatedInvoice = await prisma.customer.update({
            where: { id: UpdateInvoiceDto.id },
            data: UpdateInvoiceDto!.values
        });

        return InvoiceEntity.fromObject(updatedInvoice);
    }

    async deleteById(id: number): Promise<InvoiceEntity> {
        await this.findById(id);
        const deleted = await prisma.customer.delete({
            where: { id }
        });

        return InvoiceEntity.fromObject(deleted);
    }

}