/*Actividad 5: Async/Await
Agregar una descripción de Async/Await y luego implementar la siguiente función utilizando Async/Await:
* Crear una función asíncrona que reciba un número y retorne el doble del número después de 2 segundos. Utilizar async/await para manejar la promesa.
*/

function recibir(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero) {
                resolve(numero * 2);
            } else {
                reject("No se pudo calcular el numero");
            }
        }
            , 2000);
    })
}

async function mostrar() {
    let numero = document.getElementById("numero").value;
    try {
        const resultado = await recibir(numero);
        document.getElementById("mensaje").innerHTML = resultado
        console.log(resultado);
    } catch (error) {
        document.getElementById("mensaje").innerHTML = error
        console.log(error)
    }
}
