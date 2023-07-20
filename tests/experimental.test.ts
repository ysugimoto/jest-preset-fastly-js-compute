/// <reference types="@fastly/js-compute" />
import * as experimental from "fastly:experimental";

test("fastly:experimental", () => {
  expect(experimental).toBeDefined();
  expect(experimental.allowDynamicBackends).toBeDefined();
  expect(experimental.enableDebugLogging).toBeDefined();
  expect(experimental.includeBytes).toBeDefined();
  expect(experimental.setBaseURL).toBeDefined();
  expect(experimental.setDefaultBackend).toBeDefined();
});
