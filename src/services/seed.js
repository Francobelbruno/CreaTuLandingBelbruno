import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const sampleProducts = [
  {
    titulo: "Producto 1",
    descripcion: "Descripción del producto 1",
    precio: 1000,
    stock: 10,
    categoria: "categoria1",
    img: "https://via.placeholder.com/150"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    precio: 2000,
    stock: 5,
    categoria: "categoria2",
    img: "https://via.placeholder.com/150"
  }
];

export async function seedProducts() {
  try {
    const productsRef = collection(db, 'products');
    
    for (const product of sampleProducts) {
      await addDoc(productsRef, product);
      console.log('Producto agregado:', product.titulo);
    }
    
    console.log('¡Productos de prueba agregados exitosamente!');
  } catch (error) {
    console.error('Error al agregar productos:', error);
  }
}