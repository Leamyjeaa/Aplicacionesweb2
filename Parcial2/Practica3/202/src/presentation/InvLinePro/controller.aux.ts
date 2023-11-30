// DDD
import { Request, Response } from 'express';
import { CreateInvLineProDto, UpdateInvLineProDto } from '../../domain/dtos';
import { InvLineProRepository } from '../../domain/repositories/InvLinePro.repositories';


export class InvLineProController {

  //* DI
  constructor(
    private readonly invLineProRepository: InvLineProRepository,
  ) { }


  public getInvLinePro = async ( req: Request, res: Response ) => {
    const InvLinePro = await this.invLineProRepository.getAll();
    return res.json( InvLinePro);
  };

  public getInvLineProById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const InvLinePro = await this.invLineProRepository.findById( id );
      res.json( InvLinePro );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createInvLinePro = async ( req: Request, res: Response ) => {
    const [ error, createInvLineProDto ] = CreateInvLineProDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const invLineProRepository = await this.invLineProRepository.create( createInvLineProDto! );
    res.json( invLineProRepository );

  };

  public updateInvLinePro = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateInvLineProDto ] = UpdateInvLineProDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updateInvLinePro = await this.invLineProRepository.updateById( updateInvLineProDto! );
    return res.json( updateInvLinePro);

  };


  public deleteInvoice = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedInvoice = await this.invLineProRepository.deleteById( id );
    res.json( deletedInvoice);

  };



}