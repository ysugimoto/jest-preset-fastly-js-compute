/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="@fastly/js-compute" />
import { getRandomValues, randomUUID, subtle } from "crypto";
import * as nodeFetch from "node-fetch";
import {
  env,
  Logger,
  getGeolocationForIpAddress,
  Geolocation,
  enableDebugLogging,
  includeBytes,
} from "./fastly-js-compute-mock";

// ref: https://github.com/fastly/js-compute-runtime/blob/main/types/globals.d.ts
export class CompressionStream {
  private format: "deflate" | "deflate-raw" | "gzip";
  readonly readable: ReadableStream<Uint8Array>;
  readonly writable: WritableStream<Uint8Array>;

  constructor(format: "deflate" | "deflate-raw" | "gzip") {
    this.format = format;
    this.readable = new ReadableStream<Uint8Array>();
    this.writable = new WritableStream<Uint8Array>();
  }
}
export class DecompressionStream {
  private format: "deflate" | "deflate-raw" | "gzip";
  readonly readable: ReadableStream<Uint8Array>;
  readonly writable: WritableStream<Uint8Array>;

  constructor(format: "deflate" | "deflate-raw" | "gzip") {
    this.format = format;
    this.readable = new ReadableStream<Uint8Array>();
    this.writable = new WritableStream<Uint8Array>();
  }
}

interface Algorithm {
  name: string;
}
type AlgorithmIdentifier = Algorithm | string;
type BufferSource = ArrayBufferView | ArrayBuffer;

export const crypto = {
  getRandomValues,
  randomUUID,
  subtle: {
    digest: subtle.digest,
  },
};
export const fetch: (
  input: RequestInfo,
  init?: RequestInit,
) => Promise<Response> = globalThis.fetch || nodeFetch;
export function addEventListener<K extends keyof EventListenerMap>(
  evt: K,
  listener: EventListenerMap[K],
): void {
  // noop
}

// js-compute-runtime also provides globalThis.fastly object which includes some fields and method.
// We should export them as global
// ref: https://github.com/fastly/js-compute-runtime/issues/517
export const fastly = {
  __defaultBackend: "",

  set baseURL(base: URL | null | undefined) {
    // noop
  },
  get baseURL(): URL | null {
    return null;
  },
  set defaultBackend(backend: string) {
    this.__defaultBackend = backend;
  },
  get defaultBackend(): string {
    return this.__defaultBackend;
  },
  env: {
    get(name: string): string {
      return env(name);
    },
  },
  getLogger(endpoint: string): Logger {
    return new Logger(endpoint);
  },
  enableDebugLogging(enabled: boolean) {
    enableDebugLogging(enabled);
  },
  getGeolocationForIpAddress(address: string): Geolocation {
    return getGeolocationForIpAddress(address);
  },
  includeBytes(path: string): Uint8Array {
    return includeBytes(path);
  },
};
