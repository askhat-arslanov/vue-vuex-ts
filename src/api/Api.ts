export default abstract class Api {
  abstract readonly endpoint: string
  abstract readonly defaultParams: object

  public abstract makeRequest(data: object): Promise<any>

  async get<T>(queryParams: object): Promise<T | null> {
    if (!this.endpoint) {
      throw new Error('Endpoint does not set')
    }

    try {
      const queryString = this.makeUpQueryString(queryParams)
      const url = this.makeUpUrl(queryString)
      const response = await fetch(url)
      return await response.json()
    } catch (error) {
      // Throw it to some log
      console.error(error)
      return null
    }
  }

  private makeUpUrl(queryString: string): string {
    return `${this.endpoint}?${queryString}`
  }

  private makeUpQueryString(queryParams: object): string {
    return Object.entries({ ...this.defaultParams, ...queryParams })
      .map(([key, val]) => `${key}=${val}`)
      .join('&')
  }
}
