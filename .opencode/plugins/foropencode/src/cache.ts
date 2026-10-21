/**
 * Caché en memoria con TTL (Time To Live)
 * Almacena skills con tiempo de expiración para evitar lecturas repetidas de disco
 */

interface CacheEntry<T> {
  data: T;
  expiry: number;
}

export class SkillCache<T> {
  private cache = new Map<string, CacheEntry<T>>();
  private ttl: number;

  constructor(ttlMs: number) {
    this.ttl = ttlMs;
  }

  /**
   * Obtiene un valor del caché si no ha expirado
   */
  get(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) {
      return null;
    }

    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  /**
   * Almacena un valor en el caché con TTL
   */
  set(key: string, data: T): void {
    this.cache.set(key, {
      data,
      expiry: Date.now() + this.ttl,
    });
  }

  /**
   * Elimina una entrada específica del caché
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Limpia todo el caché
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Retorna el número de entradas en caché
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * Retorna las claves del caché
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Actualiza el TTL dinámicamente
   */
  updateTTL(ttlMs: number): void {
    this.ttl = ttlMs;
  }
}
