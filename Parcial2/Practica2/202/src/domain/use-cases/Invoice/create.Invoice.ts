import { CreateInvoiceDto } from '../../dtos';
import { InvoiceEntity } from '../../entities/Invoice.entity';
import { InvoiceRepository } from '../../repositories/Invoice.repositories';


export interface CreateInvoiceUseCase {
  execute(dto: CreateInvoiceDto): Promise<InvoiceEntity>
}

// ctrl+ shift + l
export class CreateCustomer implements CreateInvoiceUseCase {

  constructor(
    private readonly repository: InvoiceRepository,
  ) { }

  execute(dto: CreateInvoiceDto): Promise<InvoiceEntity> {
    return this.repository.create(dto);
  }

}