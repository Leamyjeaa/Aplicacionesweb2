import { UpdateInvoiceDto } from '../../dtos';
import { InvoiceEntity } from '../../entities/Invoice.entity';
import { InvoiceRepository } from '../../repositories/Invoice.repositories';


export interface UpdateInvoiceUseCase {
  execute(dto: UpdateInvoiceDto): Promise<InvoiceEntity>
}


export class UpdateCustomer implements UpdateInvoiceUseCase {

  constructor(
    private readonly repository: InvoiceRepository,
  ) { }

  execute(dto: UpdateInvoiceDto): Promise<InvoiceEntity> {
    return this.repository.updateById(dto);
  }

}
