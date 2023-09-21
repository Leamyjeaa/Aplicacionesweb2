// Punto 2 sobre los ciclos Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3 instrucciones 
//para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.

//llamamos todos los datos desde el cliente
const Customer = require("./cliente")

//En este apartado realizamos con ciclo forEach

console.log("-------------------------Ciclo con ForEach--------------------------------");
Customer.forEach((customer) => {
    for (let i = 0; i < 3; i++) {
        console.log(
            `id: ${customer.id}, correo: ${customer.email}, contraseña: ${customer.password}, nombre: ${customer.name}, apellidos: ${customer.Lname}`);
    }
});

//En este apartado realizamos con ciclo for in

console.log("--------------------------Ciclo con For in-------------------------------")
for (let index in Customer) {
    const customer = Customer[index];
    for (let i = 0; i < 3; i++) {
        console.log(`id: ${customer.id}, correo: ${customer.email}, contraseña: ${customer.password}, nombre: ${customer.name}, apellidos: ${customer.Lname}`);
    }
}

//En este apartado realizamos con ciclo for of

console.log("----------------------------Ciclo con For of-------------------------------")
for (const customer of Customer) {
    for (let i = 0; i < 3; i++) {
        console.log(`id: ${customer.id}, correo: ${customer.email}, contraseña: ${customer.password}, nombre: ${customer.name}, apellidos: ${customer.Lname}`);  
    }
}