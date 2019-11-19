export default function elimina_primer_y_ultimo(string) {
  return string.length > 2 ? string.slice(1, string.length - 1) : string;
}
