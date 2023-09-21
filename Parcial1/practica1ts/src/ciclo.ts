// Importar el módulo TypeScript del punto 2 de los ciclos 
import {Customer} from "./cliente";

// En este apartado realizamos con Ciclo forEachS
console.log("------------------------Ciclo con forEach------------------------");
Customer.forEach((customer) => {
  for (let i = 0; i < 3; i++) {
    console.log(
      `id: ${customer.id}, correo: ${customer.email}, contraseña: ${customer.password}, nombre: ${customer.name}, apellidos: ${customer.Lname}`
    );
  }
});

//En este apartado realizamos con  Ciclo for...in (No se recomienda para arreglos)
console.log("------------Ciclo con for...in-----------------------");
for (const index in Customer) {
  if (Customer.hasOwnProperty(index)) {
    const customer = Customer[index];
    for (let i = 0; i < 3; i++) {
      console.log(
        `id: ${customer.id}, correo: ${customer.email}, contraseña: ${customer.password}, nombre: ${customer.name}, apellidos: ${customer.Lname}`
      );
    }
  }
}

// En este apartado realizamos con Ciclo for...of
console.log("--------------------Ciclo con for...of-------------------------------");
for (const customer of Customer) {
  for (let i = 0; i < 3; i++) {
    console.log(
      `id: ${customer.id}, correo: ${customer.email}, contraseña: ${customer.password}, nombre: ${customer.name}, apellidos: ${customer.Lname}`
    );
  }
}
