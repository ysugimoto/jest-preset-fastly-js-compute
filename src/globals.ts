/// <reference types="@fastly/js-compute" />
import { getRandomValues, randomUUID, subtle } from "crypto";
import * as nodeFetch from "node-fetch";

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
  init?: RequestInit
) => Promise<Response> = globalThis.fetch || nodeFetch;
export function addEventListener<K extends keyof EventListenerMap>(
  evt: K,
  listener: EventListenerMap[K]
): void {
  // noop
}
