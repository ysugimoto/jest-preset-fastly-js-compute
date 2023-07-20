/// <reference types="@fastly/js-compute" />
import * as configstore from "fastly:config-store";

test("fastly:config-store", () => {
  expect(configstore).toBeDefined();
  expect(configstore.ConfigStore).toBeDefined();
  const c = new configstore.ConfigStore("meow");
  expect(c.get).toBeDefined();
  const e = c.get("cat");
  // @note always return null
  expect(e).toBe(null);
});
