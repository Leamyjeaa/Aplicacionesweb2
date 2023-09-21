// se crean las interfaces del punto 1
interface Customers {
    id: number;
    email: string;
    password: string;
    name: string;
    Lname: string;
  }
  //Punto 1 sobre los Definir un arreglo de objetos en base a su entidad asignada en el proyecto autónomo on por lo menos 5 elementos.
    //definicioon de un arreglo en este caso el de cliente(customer) con 5 de sus atributos
  export const Customer: Customers[] = [
    {
      id: 1,
      email: "jamilethanchundia1@gmail.com",
      password: "Jamileth12345",
      name: "Jamileth Estela",
      Lname: "Anchundia Anchundia",
    },
    {
      id: 2,
      email: "angelo.mero17@gmail.com",
      password: "angelo123",
      name: "Angelo Sahir",
      Lname: "Mero Castillo",
    },
    {
      id: 3,
      email: "greilybravo2002@gmail.com",
      password: "greilybravo323",
      name: "Greily Yurany",
      Lname: "Bravo Delgado",
    },
  ];
  