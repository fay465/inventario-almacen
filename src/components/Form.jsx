// src/components/form.jsx
import { useState } from "react"

export const Form = ({ inicial, guardarInfo, enEdicion, cancelarEdicion }) => {
    const [valores, setValores] = useState(inicial)
    const { nombre, categoria, precio, stock } = valores

    const cambio = ({ target }) => {
        setValores({ ...valores, [target.name]: target.value })
    }

    const guardar = async (e) => {
        e.preventDefault()
        if (nombre.trim() === '' || categoria.trim() === '' || String(precio).trim() === '' || String(stock).trim() === '')
            return alert('Completa los campos')
        
        await guardarInfo(valores)
        reset()
    }

    const reset = () => setValores(inicial)

    return (
        <form>
            <label>Nombre del Producto</label>
            <input type="text" name="nombre" value={nombre} onChange={cambio} />

            <label>Categoría</label>
            <select name="categoria" value={categoria} onChange={cambio}>
                <option value="">Seleccione una categoria</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Lácteos">Lácteos</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Conservas">Conservas</option>
            </select>

            <label>Precio</label>
            <input type="number" name="precio" value={precio} onChange={cambio} />

            <label>Stock</label>
            <input type="number" name="stock" value={stock} onChange={cambio} />

            <button onClick={guardar}>{enEdicion ? 'Actualizar' : 'Guardar'}</button>
            {enEdicion && <button type="button" onClick={cancelarEdicion}>Cancelar</button>}
        </form>
    )
}