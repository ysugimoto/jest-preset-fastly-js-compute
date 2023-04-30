/// <reference types="@fastly/js-compute" />

import defaultESM from "ts-jest/presets/default-esm/jest-preset";
import {
  addEventListener,
  CompressionStream,
  DecompressionStream,
  crypto,
  fetch,
  fastly,
} from "../../globals";

export default {
  ...defaultESM,
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
      "<rootDir>/node_modules/jest-preset-fastly-js-compute/fastly-js-compute-mock.js",
  },
};
