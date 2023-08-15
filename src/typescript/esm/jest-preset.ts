/// <reference types="@fastly/js-compute" />

import defaultESM from "ts-jest/presets/default-esm/jest-preset";
import { join } from "node:path";

export default {
  ...defaultESM,
  // Jest document says that "globals" object must be json-serializable,
  // so that we could not specify class instance which has methods and getter/setter due to lack on json serializinga.
  // Then we should use setupFiles instead in order to specify global functions and classes
  //
  // @see: https://github.com/jestjs/jest/blob/main/docs/Configuration.md#globals-object
  setupFiles: [join(__dirname, "./jest.setup.js")],
  moduleNameMapper: {
    "^fastly:.*": join(__dirname, "../../fastly-js-compute-mock.js"),
  },
};
