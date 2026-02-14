function obtenerUsuarioPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarios = [{ id: 1, nombre: juan, rol: programador }, {
                id: 2, nombre: "ana", rol: "instructor"
            }];
            const usuario = usuarios.find(u => u.id === id);

            if (usuario) {
                resolve(usuario)
            } else {
                reject(new Error("Usuario no encontrado"));
            }
        }, 2000);
    });
}

async function mostrarUsuario(id) {
    try{
        console.log("Buscando usuario............");
        const usuario = await obtenerUsuarioPorId(id);
        console.log("Resolve => Usuario encontrado")
    } catch(error){
        console.log("Reject => error:",error.message)
    } finally{
        console.log("Proceso terminado.")
    }
}