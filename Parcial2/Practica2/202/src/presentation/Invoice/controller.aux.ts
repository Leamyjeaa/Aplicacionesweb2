// DDD
import { Request, Response } from 'express';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../../domain/dtos';
import { InvoiceRepository } from '../../domain/repositories/Invoice.repositories';


export class InvoiceController {

  //* DI
  constructor(
    private readonly invoiceRepository: InvoiceRepository,
  ) { }


  public getInvoice = async ( req: Request, res: Response ) => {
    const Invoice = await this.invoiceRepository.getAll();
    return res.json( Invoice);
  };

  public getInvoiceById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const invoice = await this.invoiceRepository.findById( id );
      res.json( invoice );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createInvoice = async ( req: Request, res: Response ) => {
    const [ error, createInvoiceDto ] = CreateInvoiceDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const invoice = await this.invoiceRepository.create( createInvoiceDto! );
    res.json( invoice );

  };

  public updateInvoice = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateInvoiceDto ] = UpdateInvoiceDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedInvoice = await this.invoiceRepository.updateById( updateInvoiceDto! );
    return res.json( updatedInvoice );

  };


  public deleteInvoice = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedInvoice = await this.invoiceRepository.deleteById( id );
    res.json( deletedInvoice);

  };



}