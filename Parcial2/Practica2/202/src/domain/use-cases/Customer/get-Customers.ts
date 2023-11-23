import { CustomerEntity } from '../../entities/Customer.entity';
import { CustomerRepository } from '../../repositories/Customer.repositories';


export interface GetCustomersUseCase {
  execute(): Promise<CustomerEntity[]>
}


export class GetCustomers implements GetCustomersUseCase {

  constructor(
    private readonly repository: CustomerRepository,
  ) { }

  execute(): Promise<CustomerEntity[]> {
    return this.repository.getAll();
  }

}
