/// <reference types="@fastly/js-compute" />
import * as logger from "fastly:logger";

test("fastly:logger", () => {
  expect(logger).toBeDefined();
  expect(logger.Logger).toBeDefined();
  const l = new logger.Logger("dog");
  expect(l.log).toBeDefined();
  expect(l.log("bark")).toBe(undefined);
});
