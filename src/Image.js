import React from 'react';
import product from './product';

function Image({ width = "100%", height = "auto", borderRadius = "10px" }) {
  return (
    <img
      src={product.image}  // URL du produit
      alt={product.nom}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        objectFit: "cover",
        marginBottom: "10px"
      }}
    />
  );
}

export default Image;
