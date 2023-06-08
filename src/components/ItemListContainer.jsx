import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { id } = useParams();

  useEffect(() => {
    
  }, [id]);

  return (
    <div>
      {<p >"¡Bienvenido/a<b> {}</b> a nuestra tienda en línea!"</p>}
    </div>
  );
}

export default ItemListContainer;
