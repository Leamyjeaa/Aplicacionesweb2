import { CustomerEntity } from '../../entities/Customer.entity';
import { CustomerRepository } from '../../repositories/Customer.repositories';


export interface DeleteCustomerUseCase {
  execute(id: number): Promise<CustomerEntity>
}

export class DeleteCustomer implements DeleteCustomerUseCase {

  constructor(
    private readonly repository: CustomerRepository,
  ) { }

  execute(id: number): Promise<CustomerEntity> {
    return this.repository.deleteById(id);
  }

}