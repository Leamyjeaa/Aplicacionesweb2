import { CreateCustomerDto, UpdateCustomerDto } from '../dtos';
import { CustomerEntity } from '../entities/Customer.entity';



export abstract class CustomerDatasource {

    abstract create(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity>;

    abstract getAll(): Promise<CustomerEntity[]>;

    abstract findById(id: number): Promise<CustomerEntity>;
    abstract updateById(updateCustomerDto: UpdateCustomerDto): Promise<CustomerEntity>;
    abstract deleteById(id: number): Promise<CustomerEntity>;

}