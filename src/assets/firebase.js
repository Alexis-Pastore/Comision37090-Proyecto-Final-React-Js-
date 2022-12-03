// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//API_KEY:"AIzaSyDWJccWJLhHSofvK_c9QiEwl_qsq7K4l1k"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-veterinariahocicos.firebaseapp.com",
  projectId: "react-veterinariahocicos",
  storageBucket: "react-veterinariahocicos.appspot.com",
  messagingSenderId: "901397685977",
  appId: "1:901397685977:web:73bc4cb11df173492a00c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =  getFirestore()

//get(read)producto
const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}

const getProducto = async (id) => {
    const prod = await getDoc(doc(db, "productos",id))
    let item
    if(prod.data()) {
        item = {...prod.data(), id: prod.id}
    } else {
        item = "Producto no encontrado"
    }
    
    return item
}

//creacion de produtos en base de datos
const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}


//crear un solo ´producto

const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(db, "productos"), {
        nombre: objProducto.nombre,
        marca: objProducto.marca,
        modelo: objProducto.modelo,
        idCategoria: objProducto.idCategoria,
        stock: objProducto.stock,
        precio: objProducto.precio,
        img: objProducto.img
    })

    return estado
}

//Update Producto (actualizar)

const updateProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "productos",id), info)
    return estado
}

//delete Eliminar Producto

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db,"productos", id))
    return estado
}


//CREATE AND READ ORDENES DE COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async(id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}


export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}