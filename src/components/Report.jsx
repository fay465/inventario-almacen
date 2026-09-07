// src/components/report.jsx
export const Report = ({ info }) => {
    const totalProductos = info.length
    const totalValor = info.reduce((acc, item) => acc + (Number(item.precio) * Number(item.stock) || 0), 0)
    const bajoStock = info.filter(item => Number(item.stock) <= 5).length

    return (
        <div>
            <h3>Reporte de Inventario</h3>
            <p>Total de productos: {totalProductos}</p>
            <p>Valor total del inventario: ${totalValor}</p>
            <p>Productos con bajo stock (≤ 5): {bajoStock}</p>
        </div>
    )
}