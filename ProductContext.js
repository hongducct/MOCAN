// ProductContext.js
import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const updateProductList = (newProducts) => {
    setProducts(newProducts);
  };

  const deleteProduct = (productId) => {
    console.log('delete:', productId);
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <ProductContext.Provider value={{ products, updateProductList, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
