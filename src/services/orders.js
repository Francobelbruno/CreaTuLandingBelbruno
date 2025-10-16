import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'orders';

export async function createOrder({ buyer, items, total }) {
  const docRef = await addDoc(collection(db, COLLECTION), {
    buyer,
    items,
    total,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
