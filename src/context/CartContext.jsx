import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // {id, title, price, image, quantity, stock}

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      const stock = typeof product.stock === 'string' ? parseInt(product.stock) : product.stock;
      if (idx >= 0) {
        const updated = [...prev];
        const newQty = Math.min(updated[idx].quantity + quantity, stock ?? Infinity);
        updated[idx] = { ...updated[idx], quantity: newQty };
        return updated;
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setItems([]);

  const totalQuantity = useMemo(() => items.reduce((acc, it) => acc + it.quantity, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((acc, it) => acc + it.quantity * (it.price ?? 0), 0), [items]);

  const value = { items, addItem, removeItem, clearCart, totalQuantity, totalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
