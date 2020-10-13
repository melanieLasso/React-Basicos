import React, {Fragment, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header'; //Importas el componente Header
import Footer from './components/footer'; //Importas el componente Footer
import Producto from './components/producto';

function App() {

  const [productos, setProductos] = useState ([
    {id: 1, nombre: 'pantalon', precio: 30 },
    {id: 2, nombre: 'camisa', precio: 20 },
    {id: 3, nombre: 'collar', precio: 15 },
    {id: 4, nombre: 'zapatos', precio: 40 },
  ]);

  const [carrito, agregarCarrito] = useState([]);

  const fecha = new Date().getFullYear();

  return (
      <div className="App">
        <Header 
          titulo='Tienda virtual'
        />
        <h1>Listado de productos:</h1>
        {productos.map(producto => (
          <Producto 
            key={producto.id}
            producto={producto}
            carrito={carrito}
            productos={productos}
            agregarCarrito={agregarCarrito}
          />
        ))}

        <Footer 
          fecha={fecha}
        />
      </div>
  );
}

export default App;
