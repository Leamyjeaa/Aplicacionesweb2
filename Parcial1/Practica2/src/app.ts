// import { envs } from './config/plugins/envs.plugin'
import prisma from './prismaInstance';


//////////////////////////////////////////////////////////////////////////
////////////////////////Primera Forma////////////////////////////////////
////////////////////////////////////////////////////////////////////////

//CREAR 
const createUser= async ()=>{
    const Customer= await prisma.Customer.create({
        data:{
            email: "jamilethanchundia1@gmail.com",
            password: "2002",
            name:"Jamileth",
            lname: "Anchundia",
            phone:"09827455688",
            idCard: "1314613777",
            empresa:"Stations New",
            city:"Montecristi", 
            job: "Programación"     
        }
    });
    console.log(Customer)
    const LineCreated= await prisma.Line.create({
        data:{
            id:Customer.id,
            name:"Estelita",
            date_start: new Date(),           
        }
    })

    const InvoiceCreated= await prisma.Invoice.create({
        data:{
            id:Customer.id,
            Id_invoice: invoiceCreated.id,
            date: new Date(),
            status: true           
        }
    })

}
//CONSULTAR
const queryUser= async ()=>{
    const user= await prisma.Customer.findMany({
        include:{
            Line:true,
            Invoice:true
        }
        , where:{
            id:2
        }
    })
    console.dir(user, {depth: null})
}

//GUARDAR 
const updateUser= async ()=>{
    const user= await prisma.Customer.update({
        data:{
            name:"Estelita"
        },
        where:{
            id:1
        }
    })
}
// ELIMINAR 
const deleteUser= async ()=>{
    const user= await prisma.Customer.delete({
        where:{
            id:1
        }
    })
}

(async ()=>{
    // await createUser()
    //await deleteUser()
    await queryUser()
    .then(async () => {
        await prisma.$disconnect()
      })
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      })
})()


