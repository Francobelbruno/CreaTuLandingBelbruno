import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'products';

// Normalize Firestore product document to the shape the UI expects
function toNumber(val) {
  if (val == null) return undefined;
  const n = typeof val === 'string' ? Number(val) : val;
  return Number.isFinite(n) ? n : undefined;
}

function normalizeProduct(docSnap) {
  const data = docSnap.data();
  // Prefer English field names, fallback to Spanish ones
  const price = toNumber(data.price ?? data.precio);
  const stock = toNumber(data.stock);
  const category = data.category ?? data.categoria ?? '';
  const titulo = data.titulo ?? data.title ?? '';
  const descripcion = data.descripcion ?? data.description ?? '';
  const img = data.img ?? data.image ?? '';
  return {
    id: docSnap.id,
    titulo,
    descripcion,
    img,
    price: price ?? 0,
    stock: stock ?? 0,
    category,
  };
}

export async function fetchAllProducts() {
  const snap = await getDocs(collection(db, COLLECTION));
  return snap.docs.map(normalizeProduct);
}

export async function fetchProductsByCategory(categoryId) {
  // First try 'category'
  let q1 = query(collection(db, COLLECTION), where('category', '==', categoryId));
  let snap = await getDocs(q1);
  // If nothing found, try 'categoria'
  if (snap.empty) {
    const q2 = query(collection(db, COLLECTION), where('categoria', '==', categoryId));
    snap = await getDocs(q2);
  }
  return snap.docs.map(normalizeProduct);
}

export async function fetchProductById(id) {
  const ref = doc(db, COLLECTION, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return normalizeProduct(snap);
}
