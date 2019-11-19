export default function sumatorio(num) {
  return num ? num + sumatorio(num - 1) : 0;
}
