// src/App.jsx
import { useEffect, useState } from "react"
import { Form } from "./components/Form"
import { Table } from "./components/Table"
import { Report } from "./components/Report"
import {
    actualizarProducto, crearProducto,
    eliminarProducto, suscribirInventario,
} from "./firebase/inventarioService"

const inicial = { nombre: "", categoria: "", precio: "", stock: "" }

export const App = () => {
    const [info, setInfo] = useState([])
    const [cargando, setCargando] = useState(true)
    const [productoEditando, setProductoEditando] = useState(null)

    useEffect(() => {
        const unsubscribe = suscribirInventario((productos) => {
            setInfo(productos)
            setCargando(false)
        })
        return () => unsubscribe()
    }, [])

    const guardarInfo = async (valores) => {
        if (productoEditando) {
            await actualizarProducto(productoEditando.id, valores)
            setProductoEditando(null)
        } else {
            await crearProducto(valores)
        }
    }

    const editarInfo = (producto) => setProductoEditando(producto)
    const cancelarEdicion = () => setProductoEditando(null)
    const borrarInfo = async (id) => {
        var op = window.confirm('¿Esta seguro de eliminar el registro?')
        if (op) {
            await eliminarProducto(id)
            if (productoEditando?.id === id) setProductoEditando(null)
        }
    }

    return (
        <>
            <h1>Control de Inventario - Almacén</h1>
            
            <Report info={info} />

            <Form
                key={productoEditando?.id ?? "nuevo"}
                inicial={productoEditando ?? inicial}
                guardarInfo={guardarInfo}
                enEdicion={Boolean(productoEditando)}
                cancelarEdicion={cancelarEdicion}
            />

            {cargando ? (
                <p>Cargando inventario...</p>
            ) : (
                <Table info={info} editarInfo={editarInfo} borrarInfo={borrarInfo} />
            )}
        </>
    )
}

export default App