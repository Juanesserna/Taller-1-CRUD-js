/*


Actividad 6: Destructuring Objects
Agregar una descripción de Destructuring Objects y luego implementar la siguiente función utilizando Destructuring Objects:

* Dado el siguiente objeto:
const person = {
  name: 'Juan Carlos Valencia',
  age: 30,
  city: 'Cali',
  profession: 'Desarrollador'
};          
Utilizando destructuring, extraer el nombre, la edad y la profesión de la persona e imprimirlos.

*/

const person = {
    name: 'Juan Carlos Valencia',
    age: 30,
    city: 'Cali',
    profession: 'Desarrollador'
};
function destructuring() {
    const { name, age, profession } = person
    document.getElementById("mensaje").innerHTML = `Nombre: ${name}<br> Edad: ${age}<br> Profesión: ${profession}`
};
