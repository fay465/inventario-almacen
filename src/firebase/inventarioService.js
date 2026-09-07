// src/firebase/inventarioService.js
import {
    addDoc, collection, deleteDoc, doc,
    onSnapshot, orderBy, query, updateDoc,
} from "firebase/firestore"
import { db } from "./config"

const inventarioRef = collection(db, "inventario")

// Read en tiempo real
export const suscribirInventario = (callback) => {
    const q = query(inventarioRef, orderBy("creadoEn", "desc"))
    return onSnapshot(q, (snapshot) => {
        const productos = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data(),
        }))
        callback(productos)
    })
}

// Create
export const crearProducto = (valores) => {
    return addDoc(inventarioRef, { 
        ...valores, 
        precio: Number(valores.precio),
        stock: Number(valores.stock),
        creadoEn: Date.now() 
    })
}

// Update
export const actualizarProducto = (id, valores) => {
    const productoDoc = doc(db, "inventario", id)
    return updateDoc(productoDoc, { 
        ...valores,
        precio: Number(valores.precio),
        stock: Number(valores.stock)
    })
}

// Delete
export const eliminarProducto = (id) => {
    const productoDoc = doc(db, "inventario", id)
    return deleteDoc(productoDoc)
}