// src/components/table.jsx
export const Table = ({ info, editarInfo, borrarInfo }) => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {info.length === 0 && (
                    <tr><td colSpan={5}>No hay productos en inventario</td></tr>
                )}
                {info.map((producto) => (
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.categoria}</td>
                        <td>${producto.precio}</td>
                        <td>{producto.stock}</td>
                        <td>
                            <button onClick={() => editarInfo(producto)}>Editar</button>
                            <button onClick={() => borrarInfo(producto.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}