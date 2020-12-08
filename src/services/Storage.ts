export interface StorageInterface {
  get(key: string): string | object | null;
  set(key: string, value: string | number | object): void;
}

export class Storage implements StorageInterface {
  get(key: string): string | object | null {
    const item = localStorage.getItem(key)
    if (!item) return null

    try {
      return JSON.parse(item)
    } catch (e) {
      return item
    }
  }

  set(key: string, value: string | number | object): void {
    localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : String(value)
    )
  }
}

