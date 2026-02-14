let baseDatos1 = ["Canada", "EUA", "Mexico", "Ecuador", "Brazil", "Argentina", "Uruguay"];
let baseDatos2 = ["Japón", "Irán", "Corea del Sur", "Alemania", "Croacia", "España", "Inglaterra"];

function encontrado (){
    document.getElementById("mensaje").innerHTML = `<p>Pais encontrado!</p>`;
}

function busquedaBaseDatos1(encontrado,busquedaBaseDatos2) {
    let pais = document.getElementById("search").value;

    if (baseDatos1.includes(pais)) {
        encontrado();
    } else {
        busquedaBaseDatos2(encontrado);
    }
};

function busquedaBaseDatos2(encontrado) {
    let pais = document.getElementById("search").value;

    if (baseDatos2.includes(pais)) {
        encontrado();
    } else {
        document.getElementById("mensaje").innerHTML = `<p>Pais no encontrado!</p>`;
    }
};



/*
-Implementar una función busquedaBaseDatos1 que busque en baseDatos1 un país, y si lo encuentra retorne con un 
call back a la función encontrado la cual debe imprimir el mensaje ‘pais encontrado’.
-Si el dato NO se encontró en baseDatos1 deberá retornar con un callback a la función busquedaBaseDatos2, y si
lo encuentra retornar con un callback a la función encontrado la cual debe imprimir el mensaje ‘Pais encontrado’
-Si el dato NO se encontró en baseDatos2 deberá mostrar el mensaje ‘Dato no encontrado’
*/