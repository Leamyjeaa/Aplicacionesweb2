import { CustomerEntity } from '../../entities/Customer.entity';
import { CustomerRepository } from '../../repositories/Customer.repositories';


export interface GetCustomerUseCase {
  execute(id: number): Promise<CustomerEntity>
}


export class GetCustomer implements GetCustomerUseCase {

  constructor(
    private readonly repository: CustomerRepository,
  ) { }

  execute(id: number): Promise<CustomerEntity> {
    return this.repository.findById(id);
  }

}
