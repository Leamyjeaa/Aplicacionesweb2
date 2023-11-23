import { InvoiceEntity } from '../../entities/Invoice.entity';
import { InvoiceRepository } from '../../repositories/Invoice.repositories';


export interface GetInvoiceUseCase {
  execute(id: number): Promise<InvoiceEntity>
}


export class GetInvoice implements GetInvoiceUseCase {

  constructor(
    private readonly repository: InvoiceRepository,
  ) { }

  execute(id: number): Promise<InvoiceEntity> {
    return this.repository.findById(id);
  }

}
