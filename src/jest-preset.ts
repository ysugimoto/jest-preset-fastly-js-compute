/// <reference types="@fastly/js-compute" />

import {
  addEventListener,
  CompressionStream,
  DecompressionStream,
  crypto,
  fetch,
  fastly,
} from "./globals";

export default {
  globals: {
    addEventListener,
    CompressionStream,
    DecompressionStream,
    crypto,
    fetch,
    fastly,
  },
  moduleNameMapper: {
    "^fastly:.*":
      "node_modules/jest-preset-fastly-js-compute/fastly-js-compute-mock.js",
  },
};
