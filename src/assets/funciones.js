import { cargarBDD, getProductos } from "./firebase"
export const consultarBDD = async (ruta) => {
    const promise = await fetch(ruta)
    const productos = await promise.json()
    return productos
    
    }

//    cargarBDD()
// comento para evitar que se duplique la base de datos
//getProductos().then(data => console.log(data))