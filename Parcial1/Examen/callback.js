const TVShow = require("./arreglo")

//Se buscar Por invetiment 
//Con el callback siempre tendra un parametro para buscar por Id y el Id que no esté se mostrará el mensaje "Ha ocurrido un error"
function buscarPorinvestment(investment, callback) {

    const TVShowEncontrado = TVShow.filter((element) => { return element.investment >= investment })
    if (!TVShowEncontrado) {
        return callback("No se ha encontrado el usuario");
    }
    return callback(null, TVShowEncontrado);

    buscarPorinvestment(2, (error, tvShow) => {
        if (error) {
            console.log("Ha ocurrido un error")
        }
        console.log(tvShow);
    })
};