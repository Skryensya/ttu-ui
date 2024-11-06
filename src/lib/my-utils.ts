export function slugify(text: string) {
  if (typeof text !== "string")
    throw new Error("Slugify: text must be a string");
  return text
    .toString()
    .normalize("NFD") // Normaliza para separar los acentos de los caracteres
    .replace(/[\u0300-\u036f]/g, "") // Remueve los acentos
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Reemplaza espacios con guiones
    .replace(/[^\w-]+/g, "") // Elimina caracteres no válidos
    .replace(/--+/g, "-"); // Reemplaza múltiples guiones por uno solo
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
