import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    
    const fetchProducto = async () => {
      try {
      
        const response = await fetch('./stock.json');
        const data = await response.json();
        
        
        setProducto(data);
      } catch (error) {
        console.log(error);
      }
    };

    
    fetchProducto();

   
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
          {}
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;