/*
Actividad 4: Promises
Agregar una descripción de Promises y luego implementar la siguiente función utilizando Promises:

* Crear una promesa que reciba una cadena y si esta finaliza en vocal devolver con el resolve la vocal,
en caso contrario en el reject retornar ‘el caracter no es una vocal’. Se deben tener encuenta las vocales en 
minúsculas y en mayúsculas.
*/

function validar(cadena) {
    return new Promise((resolve, reject) => {
        const ultimaletra = cadena.slice(-1);

        setTimeout(() => {
            if (["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"].includes(ultimaletra)) {
                resolve(ultimaletra);
            } else {
                reject("La última letra no es una vocal");
            }
        }, 0);
    });
};

function usarPromesa() {
    let cadena = document.getElementById("sentencia").value;

    validar(cadena)
        .then(resolve => {
            document.getElementById("mensaje").innerHTML = resolve;
        })
        .catch(error => {
            document.getElementById("mensaje").innerHTML = error;
        })
}