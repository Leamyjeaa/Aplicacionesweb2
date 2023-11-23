import { CreateInvoiceDto, UpdateInvoiceDto } from '../dtos';
import { InvoiceEntity } from '../entities/Invoice.entity';



export abstract class InvoiceRepository {

    abstract create(createInvoiceDto: CreateInvoiceDto): Promise<InvoiceEntity>;

    abstract getAll(): Promise<InvoiceEntity[]>;

    abstract findById(id: number): Promise<InvoiceEntity>;
    abstract updateById(UpdateInvoiceDto: UpdateInvoiceDto): Promise<InvoiceEntity>;
    abstract deleteById(id: number): Promise<InvoiceEntity>;

}

