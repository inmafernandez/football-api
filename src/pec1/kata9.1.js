export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    return {
      especie,
      fruta
    };
  } else {
    return null;
  }
}
