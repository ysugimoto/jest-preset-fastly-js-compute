/// <reference types="@fastly/js-compute" />

import defaultCJS from "ts-jest/presets/default/jest-preset";
import { addEventListener, CompressionStream, DecompressionStream, crypto, fetch } from "../../globals";

export default {
  ...defaultCJS,
  globals: {
    addEventListener,
    CompressionStream,
    DecompressionStream,
    crypto,
    fetch,
  },
  moduleNameMapper: {
    "^fastly:.*": "<rootDir>/node_modules/jest-preset-fastly-js-compute/fastly-js-compute-mock.js",
  },
}
