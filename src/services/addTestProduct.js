import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

async function addProduct() {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      titulo: "Producto de Prueba",
      descripcion: "Este es un producto de prueba",
      precio: 1000,
      stock: 10,
      categoria: "test",
      img: "https://via.placeholder.com/150"
    });
    console.log("Producto agregado con ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error al agregar el producto: ", e);
    throw e;
  }
}

// Ejecutar inmediatamente
addProduct().then(id => {
  console.log('¡Producto agregado exitosamente!', id);
}).catch(error => {
  console.error('Error:', error);
});