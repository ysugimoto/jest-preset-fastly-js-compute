/// <reference types="@fastly/js-compute" />

import { addEventListener, CompressionStream, DecompressionStream, crypto, fetch } from "./globals";

export default {
  globals: {
    addEventListener,
    CompressionStream,
    DecompressionStream,
    crypto,
    fetch,
  },
  moduleNameMapper: {
    "^fastly:.*": "node_modules/jest-preset-fastly-js-compute/fastly-js-compute-mock.js",
  },
}
