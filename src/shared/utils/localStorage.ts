export function getLocalItem<T>(item: string): T | null {
  const data = localStorage.getItem(item);
  return data ? (JSON.parse(data) as T) : null;
}

export function setLocalItem(
  item: string,
  data: Record<string, any> | string,
): void {
  localStorage.setItem(item, JSON.stringify(data));
}

export function removeLocalItem(item: string): void {
  localStorage.removeItem(item);
}
