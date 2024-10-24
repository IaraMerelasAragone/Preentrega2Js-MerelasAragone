class Negocio {
    constructor(nombre, esInstalador) {
        this.nombre = nombre;
        this.esInstalador = esInstalador;
    }
}

//para almacenar entradas de usuarios
const usuarios = [];

let continua = true;

do {
    let esInstalador = confirm("Es instalador? (Aceptar si lo es, cancelar si no lo es).");

    let nombre = prompt("Ingrese su nombre o escriba 'salir' para terminar:");

    if (nombre === null || nombre.trim() === "" || nombre.toLowerCase() === "salir") {
        continua = false; //termina el ciclo
        break;
    }

    //creacion de un nuevo objeto de tipo Negocio y agregarlo al array de usuarios
    let cliente = new Negocio(nombre, esInstalador);
    usuarios.push(cliente);

    //mensaje segun si es instalador o no
    if (cliente.esInstalador){
        alert("¡Gracias por ser parte del gremio! Ofrecemos productos para instaladores. Llene el formulario y nos comunicaremos con usted a la brevedad.");
    } else {
        alert("Podemos contactarlo con un instalador para sus necesidades. Llene el formulario y nos comunicaremos con usted a la brevedad.");
    }

} while (continua); //variable continua para controlar el ciclo

//imprime los usuarios ingresados en consola
console.log("Lista de usuarios:", usuarios);