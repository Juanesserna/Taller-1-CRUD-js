// Desarrollar el insertar datos, editar, mostrar y eliminar en localStorage
// función para validar formulario y datos repetidos

let editIndex = -1;


function validateForm() {

    // Se definen variables, asignandoles el valor del id
    let email = document.getElementById("email").value;
    let name = document.getElementById("nombre").value;
    let doc = document.getElementById("documento").value;

    // Se crea variable para el local storage
    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    // Se coloca un if para que pueda validar previamente si hay un listDatra creado
    // Para no generar error al momento de validar si algun correo o documento existe
    if (listData === null) {
        listData = [];
    };

    // Se coloca if para validar que no se envien campos vacios
    if (email === "" || name === "" || doc === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    };

    // Para que el correo lleve @
    if (!email.includes("@")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    };

    // se define la variable que tendra el listdata con la función find que buscara el primer elemento con la condición si no, null
    // Valida si i (la posición) es diferente a -1 y el documento guardado es igual al documento ingresado en el html
    let duplicado = listData.find((item, i) => i !== editIndex && (item.doc === doc || item.email === email));
    
    if (duplicado) {
        // se genera alerta de si el documento ingresado es igual a un documento guardado, si no muestra el siguiente mensaje sobre el correo
        alert(duplicado.doc === doc ? "El documento ingresado ya está en uso" : "El correo ingresado ya está en uso");
        return false;
    }

    return true;
};


// Función para cargar información en el html
function showData() {
    let listData;

    // se coloca if donde valida que el item listData dentro del local storage se encuentra vacio
    if (localStorage.getItem("listData") === null) {
        // Si es null lo crea
        listData = [];
    } else {
        // Si existe lo cambia de string a un objeto / array
        listData = JSON.parse(localStorage.getItem("listData"));
    }

    // Se define la variable html para insetart los datos mas adelante
    let html = "";

    // se le aplica al listData un for para que recorra los elementos
    // se indica que se ejecute una función por cada elemento (nombre, doc, email) en la posición del elemento (index)
    listData.forEach(function (element, index) {
        // Se le indica que al html actual se le agregue el siguiente bloque, element.email, etc... inserta el valor
        // el index en los botones indica la posición ej: editData(0), etc... para saber que editar o eliminar
        html += `<tr>
                    <td>${element.email}</td>
                    <td>${element.nombre}</td>
                    <td>${element.doc}</td>
                    <td>
                        <button class="btn btn-primary" onclick="editData(${index})">Editar</button>
                        <button class="btn btn-danger" onclick="deleteData(${index})">Eliminar</button>
                    </td>
                </tr>`;
    });

    // Busca en el html un elemento con el id tableData -- dentro de esta busca la etiqueta tbody -- el [0] toma el primer tbody en el html
    // el innerhtml = html, reemplaza todo lo del tbody con lo parametrizado antes en el html
    document.getElementById("tableData").getElementsByTagName("tbody")[0].innerHTML = html;
};

// para que cuando el documento se cargue ejecute automaticamente la función showdata
window.onload = function () {
    showData();
};


// Función para añadir datos
function addData() {

    // Se valida si la función de validarform genero erroes o no, si hay errores el return se vuelve true, lo que mocha la función
    if (!validateForm()) return;

    let email = document.getElementById("email").value;
    let nombre = document.getElementById("nombre").value;
    let doc = document.getElementById("documento").value;

    // convierte el json a un objeto / array , si json.parse da null, || crea un array vacio
    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    // Si la variable editindex es -1 indicara que no se esta editando una posición si no creando una nueva
    if (editIndex === -1) {

        // Añade al final del array un elemento 
        listData.push({ email, nombre, doc });
    } else {

        // Edita el elmento en la posición enviada en editIndex, esta cambia ya que se envia la posición en la función editar
        // al momento de precionar el boton
        listData[editIndex] = { email, nombre, doc };

        // Resetea el valor para la proxima vez
        editIndex = -1;
    };

    // Se guarda dentro del local storage el item llamado listData, pero convertido a formato json
    // ya que local storage no puede guardar objetos
    localStorage.setItem("listData", JSON.stringify(listData));

    // al finalizar todo lo anterior ejecuta las funciones showdata y clearform
    showData();
    clearForm();
};

// función para limpiar el formulario con "" para que quede vacio
function clearForm() {
    document.getElementById("email").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("documento").value = "";
};

// función para eliminar todo
function delateDataAll() {

    // Se valida si la confirmación enviada al usuario, en caso tal de presionar si se
    // eliminar todo el item listData y se ejecuta la función showdata para que muestre
    // la tabla en blanco
    if (confirm("Desea eliminar todos los registros?")) {
        localStorage.removeItem("listData");
        showData();
    }
};


// función para editar usuarios
// se le suministra la posición mediante el index
function deleteData(index) {

    // convierte el string guardado a array
    let listData = JSON.parse(localStorage.getItem("listData"));

    // si el usuario confirma la eliminación del usuario se ejecuta la eliminación del usuario
    if (confirm("eliminar este usuario?")) {

        // Se usa el metodo splice para modificar el array
        // index indica desde que posición empezar
        // 1 indica cuandos elementos original
        listData.splice(index, 1);

        // se reemplaza el listData anteriormente con el que se acaba de modificar
        // lo convierte nuevamente a string
        localStorage.setItem("listData", JSON.stringify(listData));
        showData();
    }
};


// Función para editar datos
// Se envia la posición en el index
function editData(index) {

    // Se define la variable y se convierte el listData a objeto mediante el parse, si no existe crea un array vacio 
    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    // se coloca en los input del html segun la posición los valores guardados en el listData
    document.getElementById("email").value = listData[index].email;
    document.getElementById("nombre").value = listData[index].nombre;
    document.getElementById("documento").value = listData[index].doc;

    // se le asigna a editIndex la posición enviada en la función, para que al momento de presionar
    // guardar este llegue con un valor diferente a -1 y permita la edición de la posición
    editIndex = index;
};

