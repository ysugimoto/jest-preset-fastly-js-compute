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
import { join } from "node:path";
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
    "^fastly:.*": join(__dirname, "../../fastly-js-compute-mock.js"),
  },
};
