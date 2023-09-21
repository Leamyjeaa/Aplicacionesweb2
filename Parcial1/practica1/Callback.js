///Punto 3 sobre el CallBack Definir una función con Callback que reciba como parámetro su arreglo de elementos
//y un ID y devuelva el objeto correspondiente, luego mostrarlo por consola usando el
//callback.

const Customer = require("./cliente")

//Se buscar Por Id  
//Con el callback siempre tendra un parametro para buscar por Id y el Id que no esté se mostrará el mensaje "Ha ocurrido un error"
function buscarPorId(id, callback) {

    const CustomerEncontrado = Customer.find((element) => { return element.id === id })
    if (!CustomerEncontrado) {
        return callback("No se ha encontrado el usuario");
    }
    return callback(null, CustomerEncontrado);
}
buscarPorId(1, (error, customer) => {
    if (error) {
        console.log("Ha ocurrido un error")
    }
    console.log(customer);
});