/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="@fastly/js-compute" />

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:backend.d.ts
interface BackendConfiguration {
  name: string;
  target: string;
  hostOverride?: string;
  connectTimeout?: number;
  firstByteTimeout?: number;
  betweenBytesTimeout?: number;
  useSSL?: boolean;
  tlsMinVersion?: number;
  tlsMaxVersion?: number;
  certificateHostname?: string;
  caCertificate?: string;
  ciphers?: string;
  sniHostname?: string;
}

export class Backend {
  private config: BackendConfiguration;

  constructor(configuration: BackendConfiguration) {
    this.config = configuration;
  }

  public toString(): string {
    return this.config.name;
  }
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:cache-override.d.ts
export class CacheOverride {
  public mode: "none" | "pass" | "override";
  public ttl?: number;
  public swr?: number;
  public surrogateKey?: string;
  public pci?: boolean;

  constructor(
    mode: "none" | "pass" | "override",
    init?: {
      ttl?: number;
      swr?: number;
      surrogateKey?: string;
      pci?: boolean;
    },
  ) {
    this.mode = mode;
    if (init) {
      this.ttl = init.ttl;
      this.swr = init.swr;
      this.surrogateKey = init.surrogateKey;
      this.pci = init.pci;
    }
  }
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly%3Acache.d.ts
interface PurgeOptions {
  scope: "pop" | "global";
}

export class SimpleCache {
  public static _cacheEntry = new Map<
    string,
    { data: SimpleCacheEntry; ttl: number }
  >();

  static get(key: string): SimpleCacheEntry | null {
    const entry = this._cacheEntry.get(key);
    if (!entry) {
      return null;
    }
    // Check TTL expiration
    if (Date.now() > entry.ttl) {
      this._cacheEntry.delete(key);
      return null;
    }
    return entry.data;
  }

  // TODO: what does length argument mean?
  static set(
    key: string,
    value: BodyInit,
    ttl: number,
    length?: number,
  ): undefined {
    SimpleCache._cacheEntry.set(key, {
      data: new SimpleCacheEntry(value),
      ttl: Date.now() + ttl,
    });
    return;
  }

  static async getOrSet(
    key: string,
    set: () => Promise<{
      value: BodyInit | ReadableStream;
      ttl: number;
      length?: number;
    }>,
  ): Promise<SimpleCacheEntry> {
    const entry = SimpleCache.get(key);
    if (entry) {
      return entry;
    }
    const item = await set();
    const data = new SimpleCacheEntry(item.value);
    SimpleCache._cacheEntry.set(key, {
      data,
      ttl: Date.now() + item.ttl,
    });
    return Promise.resolve(data);
  }

  static purge(key: string, options: PurgeOptions): undefined {
    // No matters whatever purge options are
    SimpleCache._cacheEntry.delete(key);
    return;
  }
}

// Same implementation of KVStoreEntry
export class SimpleCacheEntry implements SimpleCacheEntry {
  private data: BodyInit;
  constructor(data: BodyInit) {
    this.data = data;
  }
  get body(): ReadableStream {
    if (this.data instanceof ReadableStream) {
      return this.data;
    }
    return new ReadableStream();
  }
  get bodyUsed(): boolean {
    return false;
  }
  text(): Promise<string> {
    return Promise.resolve(toString(this.data));
  }
  json(): Promise<object> {
    return Promise.resolve(JSON.parse(toString(this.data)));
  }
  arrayBuffer(): Promise<ArrayBuffer> {
    const buf = new Uint8Array();
    const str = toString(this.data);
    for (let i = 0; i < str.length; i++) {
      buf[i] = str[i].charCodeAt(0);
    }
    return Promise.resolve(buf);
  }
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:config-store.d.ts
export class ConfigStore {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get(key: string): string | null {
    // @note always return null
    return null;
  }
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:dictionary.d.ts
export class Dictionary {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get(key: string): string | null {
    // @note always return null
    return null;
  }
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:env.d.ts
export function env(name: string): string {
  return "";
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:experimental.d.ts
export function setBaseURL(base: URL | null | undefined): void {
  return;
}
export function setDefaultBackend(backend: string): void {
  return;
}
export function enableDebugLogging(enabled: boolean): void {
  return;
}
export function includeBytes(path: string): Uint8Array {
  return new Uint8Array();
}
export function allowDynamicBackends(enabled: boolean): void {
  return;
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly%3Afanout.d.ts
export function createFanoutHandoff(
  request: Request,
  backend: string,
): Response {
  // note that this response is Node.js Response, not a C@E Response
  // but almost cases are OK because Node.js Response class has compatibility for browser Response object.
  return new Response();
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:geolocation.d.ts
export interface Geolocation {
  as_name: string | null;
  as_number: number | null;
  area_code: number | null;
  city: string | null;
  conn_speed: string | null;
  conn_type: string | null;
  continent: string | null;
  country_code: string | null;
  country_code3: string | null;
  country_name: string | null;
  gmt_offset: string | null;
  latitude: number | null;
  longitude: number | null;
  metro_code: number | null;
  postal_code: string | null;
  proxy_description: string | null;
  proxy_type: string | null;
  region: string | null;
  utc_offset: number | null;
}
export function getGeolocationForIpAddress(address: string): Geolocation {
  return {
    as_name: null,
    as_number: null,
    area_code: null,
    city: null,
    conn_speed: null,
    conn_type: null,
    continent: null,
    country_code: null,
    country_code3: null,
    country_name: null,
    gmt_offset: null,
    latitude: null,
    longitude: null,
    metro_code: null,
    postal_code: null,
    proxy_description: null,
    proxy_type: null,
    region: null,
    utc_offset: null,
  };
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:logger.d.ts
export class Logger {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(message: any) {
    console.log(`[FASTLY: ${this.name}] ${JSON.stringify(message)}`);
  }
}

// internal, DO NOT expose
function toString(data: BodyInit): string {
  if (typeof data === "string") {
    return data;
  } else if (data instanceof ArrayBuffer) {
    const view = new Uint8Array(data);
    let str = "";
    for (let i = 0; i < view.byteLength; i++) {
      str += String.fromCharCode(view[i]);
    }
    return str;
  } else if (data instanceof Uint8Array) {
    let str = "";
    for (let i = 0; i < data.byteLength; i++) {
      str += String.fromCharCode(data[i]);
    }
    return str;
  }
  return data.toString();
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:kv-store.d.ts
// type BodyInit = ReadableStream | ArrayBufferView | ArrayBuffer | URLSearchParams | string;
class KVStoreEntry implements KVStoreEntry {
  private data: BodyInit;
  constructor(data: BodyInit) {
    this.data = data;
  }
  get body(): ReadableStream {
    if (this.data instanceof ReadableStream) {
      return this.data;
    }
    return new ReadableStream();
  }
  get bodyUsed(): boolean {
    return false;
  }
  text(): Promise<string> {
    return Promise.resolve(toString(this.data));
  }
  json(): Promise<object> {
    return Promise.resolve(JSON.parse(toString(this.data)));
  }
  arrayBuffer(): Promise<ArrayBuffer> {
    const buf = new Uint8Array();
    const str = toString(this.data);
    for (let i = 0; i < str.length; i++) {
      buf[i] = str[i].charCodeAt(0);
    }
    return Promise.resolve(buf);
  }
}
export class KVStore {
  private name: string;
  private store: { [key: string]: KVStoreEntry } = {};

  constructor(name: string) {
    this.name = name;
  }

  get(key: string): Promise<KVStoreEntry | null> {
    if (key in this.store) {
      return Promise.resolve(this.store[key]);
    }
    return Promise.resolve(null);
  }

  put(key: string, value: BodyInit): Promise<undefined> {
    this.store[key] = new KVStoreEntry(value);
    return Promise.resolve(undefined);
  }
}

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/fastly:secret-store.d.ts
// Note that SecretStore related class does not seem to be public yet, but just declare for future implementation.
export class SecretStoreEntry {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  plaintext(): string {
    return "";
  }
}

export class SecretStore {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get(key: string): Promise<SecretStoreEntry | null> {
    return Promise.resolve(null);
  }
}
