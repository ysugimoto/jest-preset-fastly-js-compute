/// <reference types="@fastly/js-compute" />

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
