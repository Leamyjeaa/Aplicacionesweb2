import { InvoiceEntity } from '../../entities/Invoice.entity';
import { InvoiceRepository } from '../../repositories/Invoice.repositories';


export interface DeleteInvoiceUseCase {
  execute(id: number): Promise<InvoiceEntity>
}

export class DeleteCustomer implements DeleteInvoiceUseCase {

  constructor(
    private readonly repository: InvoiceRepository,
  ) { }

  execute(id: number): Promise<InvoiceEntity> {
    return this.repository.deleteById(id);
  }

}