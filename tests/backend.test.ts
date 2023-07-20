/// <reference types="@fastly/js-compute" />
import * as backend from "fastly:backend";

test("fastly:backend", () => {
  expect(backend).toBeDefined();
  expect(backend.Backend).toBeDefined();
  expect(backend.Backend.prototype.toString).toBeDefined();
  const b = new backend.Backend({ name: "fastly", target: "www.fastly.com" });
  expect(b.toString()).toBe("fastly");
});
