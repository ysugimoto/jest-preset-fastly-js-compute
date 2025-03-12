import {
  addEventListener,
  CompressionStream,
  DecompressionStream,
  fetch,
  fastly,
} from "./globals";

// Expose as "global" functions and classes
Object.assign(globalThis, {
  addEventListener,
  CompressionStream,
  DecompressionStream,
  fetch,
  fastly,
});
