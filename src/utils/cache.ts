
type CacheEntry = {
  content: string;
  expiration: number; // Timestamp de expiración
};

const cache: Record<string, CacheEntry> = {};

export function getCachedContent(key: string): string | null {
  const entry = cache[key];
  if (!entry || Date.now() > entry.expiration) {
    return null; // No hay datos en caché o han expirado
  }
  return entry.content;
}

export function setCachedContent(key: string, content: string, ttl: number) {
  cache[key] = {
    content,
    expiration: Date.now() + ttl * 1000, // Tiempo de vida en ms
  };
}
