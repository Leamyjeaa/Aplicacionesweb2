import { InvoiceEntity } from '../../entities/Invoice.entity';
import { InvoiceRepository } from '../../repositories/Invoice.repositories';


export interface GetInvoicesUseCase {
  execute(): Promise<InvoiceEntity[]>
}


export class GetInvoices implements GetInvoicesUseCase {

  constructor(
    private readonly repository: InvoiceRepository,
  ) { }

  execute(): Promise<InvoiceEntity[]> {
    return this.repository.getAll();
  }

}

