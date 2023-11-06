import prisma from "@prisma/client"
//CREAR 
const createUser= async ()=>{
    const TVShow= await prisma.tvshow.create({
        data:{
            id: "1",
            Name: "Elena Feliz",
            Director: "Sofia Kay",
            investment: "2", 
        }
    });
    console.log(TVShow)
    
    const TVShowCreated= await prisma.Tvshow.create({
        data:{
            id:TVShow.id,
            Id_invoice: TVShow.Created.id,
            date: new Date(),
            status: true           
        }
    })

}