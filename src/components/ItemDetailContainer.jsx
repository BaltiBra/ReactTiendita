import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Simulación de una llamada a una API para obtener los datos del producto por su ID
    const fetchProducto = async () => {
      try {
        // Realizar la llamada a la API con el ID del producto
        const response = await fetch('./stock.json');
        const data = await response.json();
        
        // Actualizar el estado del producto con los datos obtenidos
        setProducto(data);
      } catch (error) {
        console.log(error);
      }
    };

    // Llamar a la función fetchProducto cuando se monta el componente
    fetchProducto();

    // Limpiar el estado del producto cuando se desmonta el componente
    return () => {
      setProducto(null);
    };
  }, ["id"]);

  return (
    <div>
      {producto ? (
        <div>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          {/* Resto de la información del producto */}
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;