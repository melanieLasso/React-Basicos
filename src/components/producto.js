import React from 'react';

const Producto = ({producto, carrito, productos, agregarProducto}) => {

    const id = producto;
    const { nombre , precio} = producto;

    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        console.log(producto);
    }

    return(
        <div>
            <h2>{nombre}</h2>
            <h2>{precio}</h2>
            <button type="button" onClick={() => seleccionarProducto()} >comprar</button>
        </div>
    )
}

export default Producto;