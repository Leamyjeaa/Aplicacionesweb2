import 'dotenv/config';
import { get } from 'env-var';
import { InvoiceEntity, InvoiceDatasource, CreateInvoiceDto, UpdateInvoiceDto } from '../domain';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  //PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
  POSTGRES_URL: get('POSTGRES_URL').default('public').asString(),

}
export class InvoiceRepositoryImpl implements InvoiceEntity {

    constructor(
        private readonly datasource: InvoiceDatasource
    ) { }


    create(CreateInvoiceDto: CreateInvoiceDto): Promise<InvoiceEntity> {
        return this.datasource.create(CreateInvoiceDto);
    }

    getAll(): Promise<InvoiceEntity[]> {
        return this.datasource.getAll();
    }

    findById(id: number): Promise<InvoiceEntity> {
        return this.datasource.findById(id);
    }

    updateById(UpdateInvoiceDto: UpdateInvoiceDto): Promise<InvoiceEntity> {
        return this.datasource.updateById(UpdateInvoiceDto);
    }

    deleteById(id: number): Promise<InvoiceEntity> {
        return this.datasource.deleteById(id);
    }

}



