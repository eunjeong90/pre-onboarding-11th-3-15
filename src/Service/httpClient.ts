export interface IHttpClient {
  baseURL: string;
  fetch: (endPoint: string, options: object) => Promise<Response>;
  // FIX : any type change
  get: (endPoint: string) => any;
}

export class HttpClient implements IHttpClient {
  #apiKey: string;
  baseURL;
  constructor(apiKey: string, baseURL: string) {
    this.#apiKey = apiKey;
    this.baseURL = baseURL;
  }
  async fetch(endPoint: string, options = {}) {
    const optionsWithAuth = {
      ...options,
      headers: {
        // TODO : valid fetch option type
        // ...options.headers,
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${this.#apiKey}`,
      },
    };
    const res = await window.fetch(`${this.baseURL + endPoint}`, optionsWithAuth);
    // console.log(res);
    return res.json();
  }
  async get(endPoint: string) {
    return await this.fetch(endPoint, { method: 'GET' });
  }
}
