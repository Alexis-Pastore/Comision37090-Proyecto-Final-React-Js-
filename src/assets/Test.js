import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";



//Crear producto (create prod)

/*
const producto = {
        "id": 8,
        "idCategoria": "accesorios",
        "nombre": "Correa para Perros Reforzada",
        "marca": "Mosqueton",
        "modelo": "Largo 2,5 x 3 mts",
        "precio": 990,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-veterinariahocicos.appspot.com/o/CorreaPerro.jpg?alt=media&token=ba38a99d-d33b-4688-9544-22672923a8c0"

} 
createProducto(producto).then(mensaje => console.log(mensaje))
actualizar

getProducto("AQUI VA EL ID DEL PRODUCTO").then(prod => {
    prod.stock -= 10
    updateProducto("AQUI VA EL ID DEL PRODUCTO", prod).then (mensaje => console.log(mensaje))

})
Borrar

deleteProducto("AQUI VA EL ID DEL PRODUCTO").then(mensaje => console.log(mensaje))
*/


const cliente = {
    nombre: "Pedro",
    apellido: "Parker",
    email: "pedrito@parker.com",
    dni: 123123,
    direccion: "Calle Falsa 123"
}

//createOrdenCompra(cliente, 12500, Date.now()).then(orden => console.log(orden))

//getOrdenCompra("AQUI VA EL ID de la orden").then(orden => console.log(orden))