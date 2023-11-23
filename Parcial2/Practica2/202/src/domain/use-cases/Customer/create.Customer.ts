import { CreateCustomerDto } from '../../dtos';
import { CustomerEntity } from '../../entities/Customer.entity';
import { CustomerRepository } from '../../repositories/Customer.repositories';


export interface CreateCustomerUseCase {
  execute(dto: CreateCustomerDto): Promise<CustomerEntity>
}

// ctrl+ shift + l
export class CreateCustomer implements CreateCustomerUseCase {

  constructor(
    private readonly repository: CustomerRepository,
  ) { }

  execute(dto: CreateCustomerDto): Promise<CustomerEntity> {
    return this.repository.create(dto);
  }

}